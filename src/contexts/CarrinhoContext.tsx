import { createContext } from "react";
import { useState } from "react";
import { ReactNode } from "react";

interface ItemCarrinhoInterface {
  id: number,
  title: string,
  price: number,
  amount: number,
  total: number
}

interface CarrinhoInterface {
  itensCarrinho: ItemCarrinhoInterface[]
}

interface CarrinhoProviderProps {
  children: ReactNode
}

export const CarrinhoContext = createContext({} as CarrinhoInterface) 

function CarrinhoProvider({ children }: CarrinhoProviderProps ) {
  const [itensCarrinho, setItensCarrinho] = useState<ItemCarrinhoInterface[]>([])

  return (
    <CarrinhoContext.Provider value={{ itensCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  )
}