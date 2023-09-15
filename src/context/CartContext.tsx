import { createContext, ReactNode, useState } from 'react'

export type CartProps = {
    id: number
    productName: string
    price: number
    image: string
    quantity: number
}
export type CartFunctionsProps = {
    cart: CartProps[]
    showCart: boolean
    setShowCart: (show: boolean) => void
    handleShowCart: () => void
    getTotal: () => number
    addToCart: (item: CartProps) => void
    removeFromCart: (id: number) => void
    incrementQuantity: (id: number) => void
    deCrementQuantity: (id: number) => void
}

type CartProviderProps = {
    children: ReactNode
}

export const CartContext = createContext<CartFunctionsProps | undefined>(
    undefined
)

export const CartContextProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<CartProps[]>([])
    const [showCart, setShowCart] = useState<boolean>(false)

    const handleShowCart = () => {
        setShowCart(true)
        setTimeout(() => {
            setShowCart(false)
        }, 3000)
    }

    const addToCart = (item: CartProps) => {
        handleShowCart()
        const { id } = item
        const incart = cart.find((item) => item.id === id)
        if (incart) {
            setCart((prevCart) => {
                const updatedCart = prevCart.map((cartItem) =>
                    cartItem.id === id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
                return updatedCart
            })
        } else {
            setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }])
        }
    }
    const removeFromCart = (id: number) => {
        const filteredList = cart.filter((item) => item.id != id)
        setCart(filteredList)
    }
    const getTotal = () => {
        return cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        )
    }

    const incrementQuantity = (id: number) => {
        const updated = cart.map((item) =>
            item.id === id
                ? {
                      ...item,
                      quantity: item.quantity + 1,
                  }
                : item
        )
        setCart(updated)
    }
    const deCrementQuantity = (id: number) => {
        const incart = cart.find((item) => item.id === id)
        if (incart && incart.quantity > 1) {
            const updatedItems: CartProps[] = cart?.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: item.quantity - 1,
                      }
                    : item
            )
            setCart(updatedItems)
        } else {
            removeFromCart(id)
        }
    }

    const cartContext = {
        cart,
        showCart,
        setShowCart,
        handleShowCart,
        setCart,
        addToCart,
        removeFromCart,
        getTotal,
        incrementQuantity,
        deCrementQuantity,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}
