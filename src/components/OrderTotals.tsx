import { Dispatch, useMemo } from "react"
import { OrderItemI } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

interface OrderTotalsProps {
    order: OrderItemI[]
    tip: number
    dispatch: Dispatch<OrderActions>
}

export const OrderTotals = ({order, tip, dispatch}: OrderTotalsProps) => {

    const subTotalAmount = useMemo(() => order.reduce((total,item)=> total + (item.quantity * item.price),0),[order])
    const tipAmount = useMemo(() => subTotalAmount * tip,[order,tip])
    const totalAmount = useMemo(()=> tipAmount + subTotalAmount,[order,tip])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina</h2>
            <p>Subtotal a pagar:{' '}
                <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
            </p>

            <p>Propina:{' '}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>

            <p>Total a Pagar:{' '}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </p>

            <button 
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10
                disabled:opacity-10"
                disabled={totalAmount === 0}
                onClick={() => dispatch({type: 'place-order'})}
            >Guardar Orden</button>
        </div>
    </>
  )
}
