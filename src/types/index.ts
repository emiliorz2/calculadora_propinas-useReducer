
export interface MenuItemI{
    id: number
    name: string
    price:number
}

export interface OrderItemI extends MenuItemI {
    quantity: number
}