import { createContext } from 'react'
import { ProductProps } from '../models'

export type ProductListProp = {
    products: ProductProps[]
    startIndex: number
    setStartIndex: (startIndex: number) => void
    filteredProducts: ProductProps[]
    setProducts: (products: ProductProps[]) => void
    isLoading: boolean
    setIsLoading: (state: boolean) => void
    categoryList: string[]
    handleSelectedCategory: (category: string) => void
}

export const ProductContext = createContext<ProductListProp | undefined>(
    undefined
)
