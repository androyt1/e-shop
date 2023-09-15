import { BsCartPlus } from 'react-icons/bs'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import DetailsModal from './DetailsModal'
import { useGetCart } from '../hooks/useGetCart'
import { CartProps } from '../context/CartContext'
import { formatCurrency, truncatedTitle } from '../lib'
import useModal from '../hooks/useModal'
export type RatingProp = {
    rate: number
    count: number
}
export type ItemProp = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: RatingProp
}

export const Product = ({
    id,
    image,
    title,
    price,
    description,
    category,
    rating,
}: ItemProp) => {
    const { rate, count } = rating

    const { open, onCloseModal, onOpenModal } = useModal()
    const { addToCart } = useGetCart()

    const item = {
        id: id,
        productName: title,
        price: price,
        image: image,
    }
    const addItemToCart = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        x: CartProps
    ) => {
        e.stopPropagation()
        addToCart(x)
    }

    return (
        <>
            <div
                onClick={onOpenModal}
                className='relative shadow-md hover:shadow-md hover:shadow-slate-700 p-2 group rounded-lg overflow-clip duration-500 bg-white hover:scale-110'
            >
                <LazyLoadImage
                    src={image}
                    alt={title}
                    effect='blur'
                    className='h-32 w-32 object-contain pb-3 mb-3 origin-center delay-200 duration-700 group-hover:scale-110 group-hover:z-20 '
                />
                <div className='w-[10%] h-[2px] bg-red-400 group-hover:w-[30%] duration-1000 delay-75'></div>

                <p className='absolute top-3 right-2 text-sm group-hover:text-gray-900 group-hover:font-bold group-hover:z-20 delay-1000'>
                    {formatCurrency(price, 'en-GB', 'GBP')}
                </p>
                <div className='flex justify-between items-center w-full'>
                    <p className='pb-2 group-hover:text-gray-800 group-hover:z-20'>
                        {truncatedTitle(title)}
                    </p>
                    <div
                        onClick={(e) => addItemToCart(e, item)}
                        className='text-slate-700 w-7 h-7 shadow-sm shadow-gray-300  rounded-full delay-150 duration-1000 flex justify-center items-center group-hover:bg-gray-700 group-hover:text-white group-hover:z-[20] group-hover:border-none'
                    >
                        <BsCartPlus className='text-md cursor-pointer' />
                    </div>
                </div>
                <div className='absolute group-hover:top-0 group-hover:left-0 group-hover:bg-[#5d474710] group-hover:w-full group-hover:h-full group-hover:z-10 rounded-lg'></div>
            </div>

            <DetailsModal
                open={open}
                onCloseModal={onCloseModal}
                image={image}
                title={title}
                price={price}
                category={category}
                description={description}
            />
        </>
    )
}
