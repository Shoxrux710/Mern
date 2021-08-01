import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container} from 'react-bootstrap';
// import { useHistory } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';
import { addQty, removeFromCart, removeQty } from '../redux/actions/actions'
import currencyFormatter from 'currency-formatter'
import axios from 'axios'

const Cart = () => {

    const dispatch = useDispatch()

    const [showCheckout, setShowCheckout] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")


    const { cart } = useSelector(state => state.Products)


    const res = cart.reduce((prev, item) => {
        return prev + item.price * item.qty
    }, 0)

    const Submit = (e) => {
        e.preventDefault()

        const order = {
            name: name,
            email: email,
            address: address,
            total: currencyFormatter.format(res, {code: 'USD'})
        }

        axios.post("http://localhost:4000/cartapp/cart", order)
              .then(data => console.log(data))

              window.location = "/"

        setName("")
        setEmail("")
        setAddress("")
    }

    return (
        <div className="summary">
            <Container>
                {cart.length === 0 ? (
                    <div className="been">Nothings Product</div>
                ) :
                    <>
                        {cart.map(item => {
                            return (
                                <div className="carts">
                                    <img src={item.image} alt="" />
                                    <div className="title">{item.category}</div>
                                    <div className="price">${item.price}</div>

                                    <div className="number">
                                        <FaMinus className="minus" onClick={() => dispatch(removeQty(item._id, item.qty))} />
                                        <span>{item.qty}</span>
                                        <FaPlus className="plus" onClick={() => dispatch(addQty(item._id, item.qty))} />
                                    </div>
                                    <div className="trash">
                                        <FaTrashAlt onClick={() => dispatch(removeFromCart(item._id))} />
                                    </div>
                                </div>
                            )
                        })}
                        <div className="productsummary">
                            <div className="total"><span>Total:  </span>${res}.00</div>
                            <button className="btn btn-warning" onClick={() => setShowCheckout(true)}>Proceed</button>
                        </div>
                        {
                            showCheckout && (
                                <Fade top cascade>
                                    <div className="show-cart">
                                        <form  onSubmit={Submit}>
                                            <div className="form-container">
                                            <div>
                                                    <input 
                                                    name="name"
                                                    type="text"
                                                    required 
                                                    placeholder="Name"
                                                    onChange={(e) => setName(e.target.value)}
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                     name="email"
                                                     type="email"
                                                     required 
                                                     placeholder="Email"
                                                     onChange={(e) => setEmail(e.target.value)}
                                                     />
                                                </div>
                                                <div>
                                                    <input 
                                                     name="address"
                                                     type="text"
                                                     required
                                                     placeholder="Address"
                                                     onChange={(e) => setAddress(e.target.value)}
                                                     />
                                                </div>
                                                <button 
                                                 className="btn btn-success"
                                                 type="submit"
                                                 >Checkout</button>
                                            </div>
                                        </form>
                                    </div>
                                </Fade>
                            )
                        }
                    </>
                }

            </Container>
        </div>
    )
}

export default Cart
