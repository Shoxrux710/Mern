import React from 'react'
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { HistoryCart } from '../redux/actions/appActions'
import axios from 'axios'

const History = () => {


    const dispatch = useDispatch()
    const { userTotal } = useSelector(state => state.userCarts)


    const historyRemove = (id) => {
        dispatch(HistoryCart(id))
        alert("Delete")

        axios.delete("http://localhost:4000/cartapp/delete/" + id)

    }


    return (
        <div className="history">
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Total</th>
                            <th>Data</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userTotal.length === 0 ? (
                                <div className="loading">Loading...</div>
                            ) :
                                <>
                                    {userTotal.map(item => {
                                        return (
                                            <tr>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.address}</td>
                                                <td>{item.total}</td>
                                                <td>{item.date.substring(0, 10)}</td>
                                                <td className="delete_item">
                                                    <div onClick={() => historyRemove(item._id)} className="btn btn-danger">
                                                        delete
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </>
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default History
