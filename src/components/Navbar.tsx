import { useGetCart } from '../hooks/useGetCart'
import Cart from './Cart'
import { formatCurrency } from '../lib'
import { motion, useAnimation } from 'framer-motion'

type NavbarProp = {
    icon: React.ReactNode
    title: string
}

const Navbar = ({ icon, title }: NavbarProp) => {
    const { cart, getTotal, setShowCart, showCart } = useGetCart()
    const itemCount = cart.length
    const sum: number = getTotal()
    const controls = useAnimation()

    const startWaveAnimation = () => {
        setShowCart(true)
        controls.start({
            rotate: [0, -45, 45, -45, 45, 0], // Rotate left, right, left, right, back to the initial position
            transition: {
                duration: 0.5,
                repeat: 1, // Repeat the animation indefinitely
                repeatType: 'mirror', // Reverse rotation direction on each repeat
            },
            onComplete: () => setShowCart(false), // Reset the waving flag when animation completes
        })
    }

    return (
        <div className='border h-full bg-slate-600 flex justify-between items-center px-3 relative'>
            <span className='text-2xl text-white cursor-pointer'>{title}</span>
            <div className='text-2xl text-white cursor-pointer flex justify-center items-center'>
                <span className='mr-3 text-sm'>
                    {' '}
                    Total : {formatCurrency(sum, 'en-GB', 'GBP')}
                </span>
                <motion.span
                    animate={
                        showCart
                            ? {
                                  rotate: [-45, 45, -45, 45, 0],
                                  transition: {
                                      duration: 0.5,
                                      repeat: Infinity,
                                      repeatType: 'mirror',
                                  },
                              }
                            : { rotate: 0 }
                    }
                    initial={{ rotate: 0 }}
                    onClick={() => setShowCart((prev) => !prev)}
                >
                    {icon}
                </motion.span>
                <span className='text-sm mb-2'>{itemCount}</span>
            </div>
            <Cart />
        </div>
    )
}

export default Navbar
