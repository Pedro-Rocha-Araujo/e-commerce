'use client'

import { createContext } from "react";
import { useState } from "react";
import { ReactNode } from "react";
import { toast } from "react-toastify";
import { ProdutoInterface } from "@/interfaces";

interface CarrinhoInterface {
  itensCarrinho: ProdutoInterface[],
  qtdCarrinho: number,
  adicionarProduto: (produto: ProdutoInterface)=>void,
  removerProduto: (produto: ProdutoInterface)=>void
}

interface CarrinhoProviderProps {
  children: ReactNode
}

export const CarrinhoContext = createContext({} as CarrinhoInterface) 

function CarrinhoProvider({ children }: CarrinhoProviderProps ) {
  const [itensCarrinho, setItensCarrinho] = useState<ProdutoInterface[]>([])

  function adicionarProduto(produto: ProdutoInterface) {
    try {
      const indexProduto = itensCarrinho.findIndex((i)=> {
        return i.id === produto.id
      }) // Devolve -1 caso o produto não esteja adicionado.

      if(indexProduto === -1) {
        let novoProduto = {
          ...produto,
          amount: 1,
          total: produto.price
        }
        setItensCarrinho((prevValue)=> {
          return [...prevValue, novoProduto]
        })
        return toast.success("Item adicionado")
      }

      let carrinho = itensCarrinho

      carrinho = carrinho.map((item, index)=> {
        if(indexProduto === index) {
          return {
            ...item,
            amount: item.amount + 1,
            total: (item.amount + 1) * item.price
          }
        }
        return item
      })

      setItensCarrinho(carrinho)

      
      return toast.success("Mais um item adicionado")
    } catch(erro) {
      console.log(erro)
    }
  }

  function removerProduto(produto: ProdutoInterface) {
    try {
      const indexProduto = itensCarrinho.findIndex((i)=> {
        return i.id === produto.id
      })
      let novoCarrinho = itensCarrinho
      if(novoCarrinho[indexProduto].amount === 1) {
        setItensCarrinho(novoCarrinho.filter((i)=> {
          return i.id !== produto.id
        }))
        return toast.success("Item removido")
      }

      novoCarrinho = itensCarrinho.map((item, index)=> {
        if(index === indexProduto) {
          return {
            ...item,
            amount: item.amount - 1,
            total: (item.amount - 1)*item.price
          }
        }
        return item
      })
      setItensCarrinho(novoCarrinho)
      return toast.success("Quantidade reduzida")
    } catch(erro) {
      console.log(erro)
    }
  }

  return (
    <CarrinhoContext.Provider value={{ 
      itensCarrinho, 
      qtdCarrinho: itensCarrinho.length,
      adicionarProduto,
      removerProduto
    }}>
      {children}
    </CarrinhoContext.Provider>
  )
}

export default CarrinhoProvider