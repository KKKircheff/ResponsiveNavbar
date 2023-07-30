import { AboutMeCard } from '../../components/about-me-card/about-me-card.component'
import { Footer } from '../../components/footer/footer.component'
import { Hero } from '../../components/hero-section/hero.component'
import { MembershipsContainer } from '../../components/memberships-container/memberships-container.component'
import './home.styles.scss'
import { Outlet } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <Outlet />
            <Hero />
            <AboutMeCard />
            <MembershipsContainer />
            <Footer />
        </>
    )
}

export default Home