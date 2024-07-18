import { Dispatch } from 'react'
import { OrderActions } from '../reducers/order-reducer'

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

interface TipPercentageFormProps{
    dispatch: Dispatch<OrderActions>
    tip: number
}
export const TipPercentageForm = ({dispatch, tip}: TipPercentageFormProps) => {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina</h3>

            <form>
                {tipOptions.map(tipAux =>
                    <div key={tipAux.id} className="flex gap-2">
                        <label htmlFor={tipAux.id}>{tipAux.label}</label>

                        <input
                            id={tipAux.id}
                            type="radio"
                            name="tip"
                            value={tipAux.value}
                            onChange={e => dispatch({type:'add-tip', payload:{value: + e.target.value}})}
                            checked={tipAux.value === tip}
                        />
                    </div>

                )}

            </form>
        </div>
    )
}
