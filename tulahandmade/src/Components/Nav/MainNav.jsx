import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';
import UserIcon from './UserIconNav';
import SearchIcon from './SearchIcon';
import CartIcon from './CartIconNav';
import '../../Utils/style/mainNav.scss';


class MainNav extends React.Component {
    render() {
        return (
            <div className="mainNav">                
                <UserIcon />
                <SearchIcon />
                <CartIcon />
            </div>
        )
    }
}

export default MainNav;