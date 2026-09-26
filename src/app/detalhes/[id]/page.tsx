'use client'

import { useParams } from "next/navigation"
import { useState, useEffect, useContext } from "react"
import api from "@/config/api"
import "./detalhes.css"
import { ProdutoInterface } from "@/interfaces"
import { CarrinhoContext } from "@/contexts/CarrinhoContext"
import { toast } from "react-toastify"

export default function Detalhes() {
  const [produto, setProduto] = useState<ProdutoInterface | null>(null)

  const { adicionarProduto } = useContext(CarrinhoContext)

  const { id } = useParams()

  function adicionarItem() {
    try {
      if(!produto) {
        toast.error("Erro")
        return
      }
      adicionarProduto(produto)
    } catch(erro) {
      console.log(erro)
      toast.error("Erro!")
    }
  }

  useEffect(()=> {
    async function getProduto() {
      try {
        const response = await api.get(`/products/${id}`)
        setProduto(response.data)
      } catch(erro) {
        console.log(erro)
      }
    }
    getProduto()
  }, [id])

  return (
    <section className="container detalhes">
      <img 
        src={produto?.cover}
        />
      <h2>{produto?.title}</h2>
      <div className="detalhes">
        <h3><strong>Valor:</strong> R$ {produto?.price}</h3>
        <i onClick={()=>adicionarItem()} className="fa-solid fa-cart-plus fa-lg"></i>
      </div>
      <p>{produto?.description}</p>
    </section>
  )
}