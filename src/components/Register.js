import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()


    const handlySubmit = async (e) => {

        try {
            e.preventDefault()

            const user = {
                name,
                email,
                password
            }

            const res = await axios.post("http://localhost:4000/user/register", user)

            if (res.data){
                 toast.success("Register success")
                 history.push('/login')
            }
            setName('')
            setEmail('')
            setPassword('')
            
        } catch (err) {
            if (err.response.status === 400){
                return toast.error(err.response.data.msg)
            }
        }
    }


    return (
        <div className="login">
            <ToastContainer/>
            <Container>
                <Row>
                    <Col className="form-auto" lg={5}>
                        <form onSubmit={handlySubmit}>
                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    required
                                    className="form-control"
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                                />
                            </div>
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
                            <button type="submit" className="btn btn-success">register</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register
