import { JSX } from 'react'

type LayoutProps = {
    top: JSX.Element
    left: JSX.Element
    main: JSX.Element
    footer: JSX.Element
}

const Layout = ({ top, left, main, footer }: LayoutProps) => {
    return (
        <div className='max-w-[1100px] mx-auto   flex flex-col h-screen'>
            <div className='h-16'>{top}</div>
            <div className='flex-1 flex justify-center items-start'>
                <div className='grid grid-cols-1 sm:grid-cols-4 gap-6'>
                    <div className='col-span-1 pt-10'>{left}</div>
                    <div className='col-span-3 pt-6'>{main}</div>
                </div>
            </div>
            <div className='h-10'>{footer}</div>
        </div>
    )
}

export default Layout
