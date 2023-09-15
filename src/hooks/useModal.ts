import { useState } from 'react'

const useModal = () => {
    const [open, setOpen] = useState(false)
    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)
    return { open, onCloseModal, onOpenModal }
}

export default useModal
