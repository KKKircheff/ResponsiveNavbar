import './contact.styles.scss'
import { Outlet } from 'react-router-dom'

export const Contact = () => {
    return (

        <>
            <Outlet />
            <div className='contact-page'>
                <h1>Contact</h1>
            </div>
        </>
    )
}

