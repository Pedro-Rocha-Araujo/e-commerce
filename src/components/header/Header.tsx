import Link from "next/link"
import "./header.css"

export default function Header() {
  return (
    <header>
      <div className="container">

        <h1><Link href="/">E-commerce</Link></h1>

        <div className="carrinho">
          <Link href="/carrinho">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <span>0</span>
        </div>
        
      </div>
    </header>
  )
}