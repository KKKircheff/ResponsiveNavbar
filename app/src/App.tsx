
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import './App.scss';
import Home from './routes/home/home.component';
import { Contact } from './routes/contact/contact.component';
import { items } from './application-data/navbar-config';


export interface Item {
    name: string;
    url?: string;
    children?: Item[];
}

// const items: Item[] = [
//     { name: 'Home', url: '/' },
//     { name: 'About me', url: '/' },
//     { name: 'Memberships', url: '/' },
//     { name: 'Testimonials', url: '/' },
//     { name: 'Contact', url: '/contact' },
// ];

function App() {
    return (
        <Routes>
            <Route path='/' element={<Navigation items={items} />}>
                <Route index element={<Home />} />
                <Route path='/contact' element={<Contact />} />
            </Route>
        </Routes>
    )
}

export default App;
