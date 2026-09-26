'use client'

import { useParams } from "next/navigation"
import "./detalhes.css"

export default function Detalhes() {
  const { id } = useParams()

  return (
    <section className="container detalhes">
      <img 
        src={`https://i.imgur.com/uXrbyfA.jpg`}
        />
      <div className="detalhes">
        <h2>Nome do Produto</h2>
        <i className="fa-solid fa-cart-plus fa-lg"></i>
      </div>
      <h3>Valor: R$ 400,00</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ullam amet impedit ratione! Accusamus totam veritatis numquam id explicabo inventore doloremque magnam deserunt veniam laborum? Neque nihil tempora sed repudiandae.</p>
    </section>
  )
}