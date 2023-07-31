
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import './App.scss';
import Home from './routes/home/home.component';
import { items } from './application-data/navbar-config';
import { useState } from 'react';

export interface Item {
    name: string;
    url?: string;
    children?: Item[];
}


//     { name: 'Home', url: '/' },
//     { name: 'About me', url: '/' },
//     { name: 'Memberships', url: '/' },
//     { name: 'Testimonials', url: '/' },
//     { name: 'Contact', url: '/contact' },
// ];

function App() {
    const [isContactActive, setIsContactActive] = useState(false);
    return (
        <Routes>

            <Route path='/' element={<Navigation items={items} isContactActive={isContactActive} setIsContactActive={setIsContactActive} />}>
                <Route index element={<Home isContactActive={isContactActive} setIsContactActive={setIsContactActive} />} />
                {/* <Route path='/contact' element={<Contact />} /> */}
            </Route>
        </Routes>
    )
}

export default App;
