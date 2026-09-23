import "./carrinho.css"

export default function Carrinho() {
  return (
    <section className="container carrinho">
      <h2> <i className="fa-solid fa-cart-shopping"></i> Carrinho</h2>
      <div className="itens-carrinho">

        <div className="item-carrinho">
          <img 
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuMEbQMWrh--PaEr1HGx4kVJudIUOTudNp0Kh1AwjmaN0HizkVQgIouKO&s=10`} 
          />

          <div className="infos-quantidade">
            <div className="botoes">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>

        </div>

        <div className="item-carrinho">
          <img 
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuMEbQMWrh--PaEr1HGx4kVJudIUOTudNp0Kh1AwjmaN0HizkVQgIouKO&s=10`} 
          />
          <div className="infos-quantidade">
            <div className="botoes">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="itens-carrinho-footer">
          <span className="total"><strong>Total:</strong> R$ 200,00</span>
        </div>

      </div>
    </section>
    
  )
}