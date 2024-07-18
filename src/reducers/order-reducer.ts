import { MenuItemI, OrderItemI } from "../types";

export type OrderActions = 
                {type: 'add-item', payload: {item: MenuItemI}} |
                {type: 'remove-item', payload: {id: MenuItemI['id']}} |
                {type: 'place-order'} |
                {type: 'add-tip', payload: {value: number}}

export type OrderState = {
    order: OrderItemI[],
    tip:number
}

export const initialState = {
    order: [],
    tip: 0
}

export const orderReducer = (
        state:OrderState = initialState,
        action: OrderActions
    ) => {

        if(action.type ===  'add-item') {
            const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id)
            let updatedOrder: OrderItemI[] = []
            if(itemExist) {
                updatedOrder = state.order.map(orderItem => orderItem.id === action.payload.item.id ? 
                    {...orderItem, quantity: orderItem.quantity + 1} : orderItem
                )       
            } else {
                const newItem : OrderItemI = {...action.payload.item, quantity: 1 }
                updatedOrder = [...state.order, newItem]
            }
            return {
                ...state,
                order: updatedOrder
            }
        }


        if(action.type === 'remove-item'){
            let order= state.order.filter(item => item.id !== action.payload.id)

            return {
                ...state,
                order
            }
        }

        if (action.type === 'place-order') {

            return {
                ...state,
                order: [],
                tip: 0
            }
        }

        if(action.type === 'add-tip') {
            

            return {
                ...state,
                tip: action.payload.value
            }
        }

        return state
}