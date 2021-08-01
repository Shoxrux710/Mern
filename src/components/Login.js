import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useHistory } from 'react-router-dom'
import {loginUser} from '../redux/actions/appActions'
import {useDispatch } from 'react-redux'

const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()

    


    const handleSubmit = async (e) => {

        e.preventDefault()
        try {
            const user = {
                email,
                password
            }

            const res = await axios.post('http://localhost:4000/user/login', user)

            if (res.data){

                dispatch(loginUser(res.data))
                history.push('/')
            }
            
        } catch (err) {
            if (err.response.status === 400){
                return toast.error(err.response.data.msg)
            }
        }
    }

    return (
        <div className="login">
            <Container>
                <Row>
                    <Col className="form-auto" lg={5}>
            <form onSubmit={handleSubmit}>
                  <div className="form-group">
                          <label>Email:</label>
                          <input
                           type="email"
                           required
                           className="form-control"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           />
                      </div>
                      <div className="form-group">
                          <label>Password:</label>
                          <input
                           type="password"
                           required
                           className="form-control"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           />
                      </div>
                      <button type="submit" className="btn btn-success">login</button>
                  </form>
                  </Col>
                  </Row>
            </Container>
        </div>
    )
}

export default Login
