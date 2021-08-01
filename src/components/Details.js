import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container} from 'react-bootstrap';
import { addToCart } from '../redux/actions/actions'

const Details = () => {

    const { goBack } = useHistory()
    const dispatch = useDispatch()
    const { id } = useParams()
    const { products } = useSelector(state => state.Products)
    const carts = products.filter(product => product._id == id)




    return (
        <div className="cart">
            <Container>
                {carts.map(item => {
                    return (
                        <div className="product" key={item._id}>
                            <div className="card">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="card">
                                <div className="title">{item.title}</div>
                                <div className="price">${item.price}</div>
                                <div className="meta">{item.category}</div>
                                <p>{item.description}</p>
                                <div className="btn">
                                    <button onClick={goBack} className="btn btn-danger">Go Back</button>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => dispatch(addToCart(item._id))}
                                    >Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Container>
        </div >
    )
}

export default Details
