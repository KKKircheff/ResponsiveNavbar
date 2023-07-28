import { Hero } from '../../components/hero-section/hero.component'
import './home.styles.scss'
import { Outlet } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <Outlet />
            <Hero />
        </>
    )
}

export default Home