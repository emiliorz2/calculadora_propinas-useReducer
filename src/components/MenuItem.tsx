import { OrderActions } from "../reducers/order-reducer"
import type { MenuItemI } from "../types"
import { Dispatch } from "react"
interface ItemProps{
    item: MenuItemI
    dispatch: Dispatch<OrderActions>
}

export const MenuItem = ({item, dispatch} : ItemProps) => {
  return (
    <button
    className="border-2 border-teal-400 w-full p-3 hover:bg-teal-200 flex justify-between"
    onClick={() => dispatch({type: 'add-item', payload: {item}})}
    >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}
