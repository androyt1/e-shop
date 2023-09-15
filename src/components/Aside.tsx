import { useGetProducts } from '../hooks/useGetProducts'

const Aside = () => {
    const { handleSelectedCategory, categoryList } = useGetProducts()

    const categories: string[] = [
        'electronics',
        'jewelery',
        "men's clothing",
        "women's clothing",
    ]

    return (
        <aside className='bg-gray-100 h-full flex flex-col justify-start items-center gap-4 px-3'>
            {categories?.map((category: string, index: number) => (
                <button
                    className={`${
                        categoryList.includes(category)
                            ? 'text-black bg-white'
                            : 'bg-black text-white'
                    } capitalize  block   rounded-md w-full shadow-sm shadow-gray-500`}
                    key={index}
                    onClick={() => handleSelectedCategory(category)}
                >
                    {category}
                </button>
            ))}
        </aside>
    )
}

export default Aside
