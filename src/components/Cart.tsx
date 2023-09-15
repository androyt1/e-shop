import { useGetCart } from '../hooks/useGetCart'
import { MdDeleteForever } from 'react-icons/md'
import { formatCurrency } from '../lib'
const Cart = () => {
    const {
        cart,
        incrementQuantity,
        deCrementQuantity,
        removeFromCart,
        showCart,
        setShowCart,
    } = useGetCart()

    const EmptyCart = () => (
        <div className='flex justify-center items-center'>
            <p>Your Cart is Empty</p>
        </div>
    )
    return (
        <div
            className={`${
                showCart ? 'flex' : 'hidden'
            } absolute w-[40%] h-fit py-3 px-3 bg-white top-[64px] right-0  flex-col z-50 gap-y-2 shadow-md shadow-slate-500 max-h-96 overflow-auto`}
        >
            {cart.length < 1 && <EmptyCart />}
            {cart.map((item) => (
                <div
                    key={item.id}
                    className='border-b-1 border-slate-400 grid grid-cols-6'
                >
                    <div className='col-span-1'>
                        <img src={item.image} className='h-8 w-8' />
                    </div>
                    <div className='text-xs col-span-2 flex items-center'>
                        {item.productName.substring(0, 20)}
                    </div>
                    <div className='col-span-2 flex items-center justify-between px-2'>
                        <button
                            className='shadow-md shadow-slate-500 py-1 text-xs px-2 rounded-md'
                            onClick={() => incrementQuantity(item.id)}
                        >
                            +
                        </button>
                        <span className='text-xs'>{item.quantity}</span>
                        <button
                            onClick={() => deCrementQuantity(item.id)}
                            className='shadow-md shadow-slate-500 py-1 text-xs px-2 rounded-md'
                        >
                            -
                        </button>
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className='shadow-md shadow-slate-500 py-1  px-1 rounded-md bg-transparent text-red text-lg'
                        >
                            <MdDeleteForever />
                        </button>
                    </div>
                    <div className='text-xs w-full col-span-1 flex items-center justify-center'>
                        <span>
                            {' '}
                            {formatCurrency(item.price, 'en-GB', 'GBP')}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cart
