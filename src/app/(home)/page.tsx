'use client'

import "./home.css"
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { CarrinhoContext } from "@/contexts/CarrinhoContext";
import { ProdutoInterface } from "@/interfaces";
import api from "@/config/api";

export default function Home() {
  const [produtos, setProdutos] = useState<ProdutoInterface[]>()

  const { adicionarProduto } = useContext(CarrinhoContext)

  const router = useRouter()

  useEffect(()=> {
    async function getProdutos() {
      try {
        const response = await api.get("/products")
        setProdutos(response.data)
      } catch(erro) {
        console.log(erro)
      }
    }
    getProdutos()
  }, [])

  function mostrarDetalhes(id: number) {
    try {
      router.push(`/detalhes/${id}`)
    } catch(erro) {
      console.log(erro)
    }
  }

  return (
    <section className="home container">
      { !produtos && (
        <p className="erro">Nenhum produto encontrado!</p>
      ) }
      <div className="produtos">
        { produtos?.map((produto)=> {
          return (
            <div onClick={()=>mostrarDetalhes(produto.id)} key={produto.id} className="produto">
              <img 
                src={produto.cover} 
              />
              <h3>{produto.title}</h3>
              <span className="preco">R$ {produto.price}</span>
            </div>
          )
        }) }

      </div>

    </section>
  );
}
