import React from 'react'
import {useSelector} from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {removeFromCart_to} from '../redux/actions/appActions'
import axios from 'axios'

const Update = () => {

    const dispatch = useDispatch()

    const {products} = useSelector(state => state.Products)
    const { login } = useSelector(state => state.userCarts)
    console.log("products", products);

    const Remove = (id) => {
        dispatch(removeFromCart_to(id))
        alert('Delete');

        axios.delete("http://localhost:4000/app/delete/" + id)
    }

    return (
        <div className="update">
            <Container>
                {
                    products.length === 0 ? (
                        <div className="loading">Loading...</div>
                    ): 
                    <>
                     <div className="userLogin">
                     <Link to="/add/product" className="btn btn-primary">add Product</Link>
                     <div className="users">
                         <p>Name: {login.user.name}</p>
                         <p>Email: {login.user.email}</p>
                     </div>
                     </div>
                <Row>
                    {products.map(item => {
                        return (
                            <Col lg={4} md={6} key={item._id}>
                                <div className="card">
                                  <div className="image">
                                  <img src={item.image} alt="" />
                                  </div>
                                    <p className="meta">{item.category}</p>
                                    <p className="price">${item.price}</p>
                                    <div className="button">
                                    <Link to={`/form/${item._id}`} className="btn btn-success" >update</Link>
                                    <Link onClick={() => Remove(item._id)}  className="btn btn-danger">delete</Link>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
                    </>
                }
            </Container>
        </div>
    )
}

export default Update
