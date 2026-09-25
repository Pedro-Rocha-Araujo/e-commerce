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
  removerProduto: (produto: ProdutoInterface)=>void,
  total: number
}

interface CarrinhoProviderProps {
  children: ReactNode
}

export const CarrinhoContext = createContext({} as CarrinhoInterface) 

function CarrinhoProvider({ children }: CarrinhoProviderProps ) {
  const [itensCarrinho, setItensCarrinho] = useState<ProdutoInterface[]>([])
  const [total, setTotal] = useState<number>(0)

  function adicionarProduto(produto: ProdutoInterface) {
    try {
      const indexProduto = itensCarrinho.findIndex((i)=> {
        return i.id === produto.id
      }) // Devolve -1 caso o produto não esteja adicionado.
      let array = itensCarrinho
      if(indexProduto === -1) {
        let novoProduto = {
          ...produto,
          amount: 1,
          total: produto.price
        }
        array.push(novoProduto)
        setItensCarrinho(array)
        calcularTotal(array)
        return toast.success("Item adicionado")
      }

      array = array.map((item, index)=> {
        if(indexProduto === index) {
          return {
            ...item,
            amount: item.amount + 1,
            total: (item.amount + 1) * item.price
          }
        }
        return item
      })
      setItensCarrinho(array)
      calcularTotal(array)

      
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
      let array = itensCarrinho

      if(array[indexProduto].amount === 1) {
        array = array.filter((i)=> {
          return i.id !== produto.id
        })
        setItensCarrinho(array)
        calcularTotal(array)
        return toast.success("Item removido")
      }

      array = itensCarrinho.map((item, index)=> {
        if(index === indexProduto) {
          return {
            ...item,
            amount: item.amount - 1,
            total: (item.amount - 1)*item.price
          }
        }
        return item
      })
      setItensCarrinho(array)
      calcularTotal(array)
      return toast.success("Quantidade reduzida")
    } catch(erro) {
      console.log(erro)
    }
  }

  function calcularTotal(itens: ProdutoInterface[]) {
    const array = itens
    const total = array.reduce((acumulador, valorAtual)=> {
      return acumulador + valorAtual.total
    }, 0)
    setTotal(total)
  }

  return (
    <CarrinhoContext.Provider value={{ 
      itensCarrinho, 
      qtdCarrinho: itensCarrinho.length,
      adicionarProduto,
      removerProduto,
      total
    }}>
      {children}
    </CarrinhoContext.Provider>
  )
}

export default CarrinhoProvider