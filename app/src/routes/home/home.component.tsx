import './home.styles.scss'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Outlet />
            <div className='home-page'>
                <h1>Home</h1>
            </div>
        </>
    )
}

export default Home