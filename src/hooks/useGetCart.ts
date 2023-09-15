import { useContext } from 'react'
import { CartContext, CartFunctionsProps } from '../context/CartContext'

export const useGetCart = (): CartFunctionsProps => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('CartContext cannot be used outside a Provider')
    }
    return context
}
