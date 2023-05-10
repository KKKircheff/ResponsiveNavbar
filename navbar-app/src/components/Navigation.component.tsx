import React from 'react';
import { Item } from '../App';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface NavigationProps {
    items: Item[];
}

const Navigation = ({ items }: NavigationProps) => {

    const [isToggled, setIsToggled] = useState(true);
    const renderItems = () => items.map((item, index) => (
        <>
            <li key={index}>
                {item.url
                    ? <Link to={item.url}>{item.name}</Link>
                    : <span>
                        {item.name}
                        <img src='/arrow.svg' alt='arrow' />
                    </span>
                }
                {item.children && renderChildren(item.children)}
            </li>
        </>
    ))

    const renderChildren = (children: Item[]) => (
        <ul className="sub-menu">
            {children.map((child, index) => (
                <li key={index}>
                    <Link to={child.url!}>
                        {child.name}
                    </Link>
                </li>
            ))}
        </ul>
    )

    return (
        <nav>
            <div className="container">
                <div className="logo" />
                <div
                    className={
                        isToggled
                            ? 'hamburger close'
                            : 'hamburger'
                    }
                    onClick={() => setIsToggled(!isToggled)}
                >
                    <span className="burger-bar"></span>
                    <span className="burger-bar"></span>
                    <span className="burger-bar"></span>
                    <span className="burger-bar"></span>
                </div>
            </div>
            <ul
                className={[
                    'menu',
                    isToggled && 'active'
                ].filter(Boolean).join(' ')}
            >{renderItems()}</ul>
        </nav>
    )
}

export default Navigation