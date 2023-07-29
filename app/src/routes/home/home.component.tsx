import { Footer } from '../../components/footer/footer.component'
import { Hero } from '../../components/hero-section/hero.component'
import './home.styles.scss'
import { Outlet } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <Outlet />
            <Hero />
            <Footer />
        </>
    )
}

export default Home