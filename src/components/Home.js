import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {addToCart} from '../redux/actions/actions'

const Home = () => {


    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')

    const dispatch = useDispatch()
    const {products} = useSelector(state => state.Products)

    const sortFilter = (e) => {
        const sorting = e.target.value

         products.sort((a, b) => {
            if (sorting === "all"){
            return a._id > b._id ? 1: -1
            }  
          
            if (sorting === "lowest"){
            return a.price > b.price ? 1: -1
            }  
          
            if (sorting === "highest"){
            return a.price < b.price ? 1: -1
            }  
        })
        setSort(sorting)
    }


    return (
        <div className="home">
            <Container>
            <div className="images">
            <input type="text" placeholder="Search..." onChange={e => setSearch(e.target.value)} />
            <select value={sort} className="form-select" onChange={sortFilter} >
                <option value="all">Latest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
            </select>
            </div>
                <Row>
                    {
                        products.length === 0 ? (
                            <div className="loading">Loading...</div>
                        ):
                       <>
                         {products.filter(val => {
                             
                             if (search === ""){
                                 return val
                             }else if (val.category.toLowerCase().includes(search.toLowerCase())){
                                return val
                             }
                         }).map(item => {
                            return ( 
                                <Col lg={4} md={6} key={item._id}>
                                    <div className="card">
                                      <div className="image">
                                      <Link to={`/details/${item._id}`}>
                                        <img src={item.image} alt="" />
                                        </Link>
                                      </div>
                                        <p className="meta">{item.category}</p>
                                        <p className="price">${item.price}</p>
                                        <button onClick={() => dispatch(addToCart(item._id))} className="btn btn-success">add to cart</button>
                                    </div>
                                </Col>
                            )
                        })}
                       </>
                    }
                  
                </Row>
            </Container>
        </div>
    )
}

export default Home
