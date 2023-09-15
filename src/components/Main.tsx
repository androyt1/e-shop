import { useGetProducts } from '../hooks/useGetProducts'
import { Product } from './Product'

const Main = () => {
    const {
        isLoading,
        filteredProducts,
        products,
        categoryList,
        startIndex,
        setStartIndex,
    } = useGetProducts()

    if (isLoading) {
        return (
            <section className='w-full h-full flex justify-center items-center'>
                <span>Loading projects... Please wait</span>
            </section>
        )
    }

    const itemsPerPage = 6

    const productToDisplay =
        filteredProducts.length > 0 ? filteredProducts : products

    const categories = categoryList.join(' + ') || 'All Products'
    const totalItems = Math.ceil(productToDisplay.length / itemsPerPage)
    const buttonsCount = []

    for (let i = 0; i < totalItems; ++i) {
        buttonsCount.push(i)
    }

    const handleButtonClick = (index: number): void => {
        setStartIndex(index)
    }

    return (
        <div className='flex-1'>
            <div className='flex  justify-between items-start py-2'>
                <span className='capitalize text-xs font-bold text-center'>
                    Showing {categories}
                </span>
                <span className='capitalize text-xs font-bold'>
                    {`${productToDisplay.length} Product(s) found`}
                </span>
            </div>
            <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  px-3 bg-gray-100 py-3'>
                {productToDisplay
                    .slice(
                        startIndex * itemsPerPage,
                        (startIndex + 1) * itemsPerPage
                    )
                    .map((product) => (
                        <Product key={product.id} {...product} />
                    ))}
            </main>
            <div className='mt-8 w-full flex justify-center items-center '>
                {buttonsCount.map((i) => (
                    <button
                        onClick={() => handleButtonClick(i)}
                        className={`px-2 py-1 border mx-1 rounded-md text-xs font-bold ${
                            startIndex === i
                                ? 'bg-gray-600 shadow-sm text-white'
                                : ''
                        }`}
                        key={i}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Main
