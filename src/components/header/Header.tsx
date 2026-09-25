'use client'

import Link from "next/link"
import "./header.css"
import { CarrinhoContext } from "@/contexts/CarrinhoContext"
import { useContext } from "react"
import { useRouter } from "next/navigation"

export default function Header() {
  const { qtdCarrinho } = useContext(CarrinhoContext)

  const router = useRouter()

  return (
    <header>
      <div className="container">

        <h1><Link href="/">E-commerce</Link></h1>

        <div onClick={()=>router.push("/carrinho")} className="carrinho">
          <Link href="/carrinho">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <span>{qtdCarrinho}</span>
        </div>
        
      </div>
    </header>
  )
}