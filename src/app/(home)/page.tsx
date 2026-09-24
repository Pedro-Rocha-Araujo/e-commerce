'use client'

import "./home.css"
import { useEffect, useState } from "react";
import { ProdutoInterface } from "@/interfaces";
import api from "@/config/api";

export default function Home() {
  const [produtos, setProdutos] = useState<ProdutoInterface[]>()

  return (
    <section className="home container">

      <div className="produtos">

        <div className="produto">
          <img 
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuMEbQMWrh--PaEr1HGx4kVJudIUOTudNp0Kh1AwjmaN0HizkVQgIouKO&s=10`} 
          />
          <h3>Fone de ouvido</h3>
          <div className="infos">
            <span>R$ 230,00</span>
            <i className="fa-solid fa-cart-plus fa-lg"></i>
          </div>
        </div>

      </div>

    </section>
  );
}
