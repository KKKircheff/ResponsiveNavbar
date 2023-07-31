import { AboutMeSection } from '../../components/about-me-section/about-me-section.component'
import { Footer } from '../../components/footer/footer.component'
import { Hero } from '../../components/hero-section/hero.component'
import { MembershipsContainer } from '../../components/memberships-container/memberships-container.component'
import './home.styles.scss'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

type Props = {
    isContactActive: boolean,
    setIsContactActive: (newValue: boolean) => void;
}


const Home = ({ isContactActive, setIsContactActive }: Props) => {
    return (
        <>
            <Outlet />
            <Hero />
            <AboutMeSection />
            <MembershipsContainer />
            <Footer isContactActive={isContactActive} setIsContactActive={setIsContactActive} />
        </>
    )
}

export default Home