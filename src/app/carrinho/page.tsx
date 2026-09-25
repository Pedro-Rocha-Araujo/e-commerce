'use client'

import "./carrinho.css"
import { useContext } from "react"
import { CarrinhoContext } from "@/contexts/CarrinhoContext"

export default function Carrinho() {
  const { itensCarrinho, removerProduto, adicionarProduto } = useContext(CarrinhoContext)



  return (
    <section className="container carrinho">
      <h2> <i className="fa-solid fa-cart-shopping"></i> Carrinho</h2>
      { itensCarrinho.length === 0 ? (
        <p className="erro">Nenhum item no carrinho!</p>
      ): (
        <div className="itens-carrinho">
          
          { itensCarrinho.map((item)=> {
            return (
              <div key={item.id} className="item-carrinho">

                <div className="infos-produto">
                  <img 
                    src={item.cover} 
                  />
                  <span><strong>Valor: </strong>R$ {item.price}</span>
                </div>

                <div className="infos-quantidade">
                  <div className="botoes">
                    <button onClick={()=>removerProduto(item)}>-</button>
                    <span>{item.amount}</span>
                    <button onClick={()=>adicionarProduto(item)}>+</button>
                  </div>
                  <span><strong>Total: </strong>R$ {item.total}</span>
                </div>

              </div>

            )
          }) }

          <div className="itens-carrinho-footer">
            <span className="total"><strong>Total:</strong> R$ 200,00</span>
          </div>

        </div> 
      ) }
    </section>
    
  )
}