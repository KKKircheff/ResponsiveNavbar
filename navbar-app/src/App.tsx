import React from 'react';
import Navigation from './components/Navigation.component';
import './App.css';

interface NameUrl {
  name: string;
  url?: string;
}


export interface Item {
  name: string;
  url?: string;
  children?: Item[];
}

const items: Item[] = [
  { name: 'Home', url: '/' },
  {
    name: 'Tutorials',
    children: [
      { name: 'Beginner', url: '/tutorials/beginner' },
      { name: 'Intermediate', url: '/tutorials/intermediate' },
      { name: 'Advanced', url: '/tutorials/advanced' },
    ],
  },
  { name: 'About us', url: '/' },
  { name: 'Contact', url: '/' },
];

function App() {
  return (
    <div className="App">
      <Navigation items={items} />
    </div>
  )
}

export default App;
