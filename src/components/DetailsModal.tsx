import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import { formatCurrency } from '../lib'

type ModalProps = {
    open: boolean
    onCloseModal: () => void
    image: string
    title: string
    category: string
    price: number
    description: string
}

const DetailsModal = ({
    open,
    onCloseModal,
    image,
    title,
    price,
    category,
    description,
}: ModalProps) => {
    return (
        <Modal open={open} onClose={onCloseModal} center>
            <div className='grid grid-cols-2 gap-5'>
                <div className='flex justify-center items-center'>
                    <img src={image} alt={title} />
                </div>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <p className='font-bold text-3xl'>Title {title}</p>
                    <p className='text-slate-500'>
                        {' '}
                        {formatCurrency(price, 'en-GB', 'GBP')}
                    </p>
                    <p>
                        Category{' '}
                        <span className='font-semibold'>{category}</span>
                    </p>
                    <p
                        className='first-letter:text-2xl first-letter:font-bold first-letter:text-slate-700
  first-letter:mr-1 first-letter:float-left first-letter:uppercase'
                    >
                        {description}
                    </p>
                </div>
            </div>
        </Modal>
    )
}

export default DetailsModal
