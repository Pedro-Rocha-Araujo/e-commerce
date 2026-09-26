'use client'

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import api from "@/config/api"
import "./detalhes.css"
import { ProdutoInterface } from "@/interfaces"

export default function Detalhes() {
  const [produto, setProduto] = useState<ProdutoInterface>()
  console.log(produto)
  const { id } = useParams()

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
  }, [])

  return (
    <section className="container detalhes">
      <img 
        src={`https://i.imgur.com/uXrbyfA.jpg`}
        />
      <div className="detalhes">
        <h2>{produto?.title}</h2>
        <i className="fa-solid fa-cart-plus fa-lg"></i>
      </div>
      <h3>Valor: R$ {produto?.price}</h3>
      <p>{produto?.description}</p>
    </section>
  )
}