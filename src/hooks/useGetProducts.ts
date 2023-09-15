import { useContext } from 'react'
import { ProductListProp, ProductContext } from '../context/ProductContext'
export const useGetProducts = (): ProductListProp => {
    const context = useContext(ProductContext)
    if (!context) {
        throw new Error('Context can only be used within a Provider')
    }
    return context
}
