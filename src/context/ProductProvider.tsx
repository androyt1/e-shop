import { useState, ReactNode, useEffect } from 'react'
import { ProductProps } from '../models'
import { ProductContext } from './ProductContext'
import { fetchProducts } from '../lib'

type ProductProviderProps = {
    children: ReactNode
}

export const ProductContextProvider = ({ children }: ProductProviderProps) => {
    const [products, setProducts] = useState<ProductProps[]>([])
    const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [categoryList, setCategoryList] = useState<string[]>([])
    const [startIndex, setStartIndex] = useState<number>(0)

    useEffect(() => {
        fetchProducts()
            .then((res) => {
                setIsLoading(false)
                setProducts(res)
            })
            .catch((err) => {
                console.log('Something went wrong fetch products', err)
            })
    }, [])

    const handleSelectedCategory = (category: string) => {
        setStartIndex(0)
        if (categoryList.includes(category)) {
            const filteredCategories = categoryList.filter(
                (item) => item !== category
            )
            setCategoryList(filteredCategories)
            const filterOutProductsInCategory = filteredProducts.filter(
                (product) => product.category !== category
            )
            setFilteredProducts(filterOutProductsInCategory)
        } else {
            setCategoryList([...categoryList, category])
            const productsInCategory = products?.filter(
                (product) => product.category === category
            )
            const newList = [...filteredProducts, ...productsInCategory]
            setFilteredProducts(newList)
        }
    }

    const values = {
        products,
        setProducts,
        isLoading,
        setIsLoading,
        categoryList,
        handleSelectedCategory,
        filteredProducts,
        startIndex,
        setStartIndex,
    }

    return (
        <ProductContext.Provider value={values}>
            {children}
        </ProductContext.Provider>
    )
}
