'use client'

import "./home.css"
import { useEffect, useState, useContext } from "react";
import { CarrinhoContext } from "@/contexts/CarrinhoContext";
import { ProdutoInterface } from "@/interfaces";
import api from "@/config/api";
import { toast } from "react-toastify";

export default function Home() {
  const [produtos, setProdutos] = useState<ProdutoInterface[]>()

  const { adicionarProduto } = useContext(CarrinhoContext)

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

  function adicionarAoCarrinho(produto: ProdutoInterface) {
    try { 
      adicionarProduto(produto)
    } catch(erro) {
      console.log(erro)
      toast.error("Erro!")
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
            <div key={produto.id} className="produto">
              <img 
                src={produto.cover} 
              />
              <h3>{produto.title.split(" ").slice(0, 3).join(" ")}...</h3>
              <div className="infos">
                <span>R$ {produto.price}</span>
                <i onClick={()=>adicionarAoCarrinho(produto)} className="fa-solid fa-cart-plus fa-lg"></i>
              </div>
            </div>
          )
        }) }

      </div>

    </section>
  );
}
