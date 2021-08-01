import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {

    const { cart } = useSelector(state => state.Products)
    const [sideBar, setSideBar] = useState(false)

    const { login } = useSelector(state => state.userCarts)

    const BarsForm = () => {
        setSideBar(!sideBar)
        console.log(!sideBar);
    }


    const count = cart.reduce((prev, item) => {
        return prev + item.qty
    }, 0)




    return (
        <>
            <div className="navbar">
                <Container>
                    <div className="brand">Shopping</div>
                    <FaBars className="bars" onClick={BarsForm} />
                    <ul className={sideBar ? 'menu active' : 'menu'}>
                        <li >
                            <FaTimes className="times" onClick={BarsForm} />
                        </li>
                        <li><Link className="home" to="/">Home</Link></li>
                        <li><Link className="login" to="/cart">Cart <FaShoppingCart className="cart_shop" /><span> {count}</span> </Link></li>
                        {
                            login.user ?
                                <>
                                    <li><Link className="home" to="/history">History</Link></li>
                                    <li><Link className="home" to="/update">Admin</Link></li>
                                </>
                                :
                                <>
                                    <li><Link className="home" to="/login">Login</Link></li>
                                    <li><Link className="home" to="/register">Register</Link></li>
                                </>
                        }
                    </ul>
                </Container>
            </div>
        </>
    )
}

export default Navbar
