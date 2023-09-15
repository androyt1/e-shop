import Layout from './components/Layout'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Aside from './components/Aside'
import { BsFillCartFill } from 'react-icons/bs'

const App = () => {
    return (
        <Layout
            top={<Navbar title='Navbar' icon={<BsFillCartFill />} />}
            left={<Aside />}
            main={<Main />}
            footer={<Footer />}
        />
    )
}

export default App
