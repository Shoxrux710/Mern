import React, {useEffect} from 'react'
import Home from './Home'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {productApp} from '../redux/actions/appActions'


const Header = () => {

    const disptach = useDispatch()

    const appProducts = async () => {
        const response = await axios.get("http://localhost:4000/app/productAll")
                              .catch(err => console.log(err))  

                              disptach(productApp(response.data))

    }

    useEffect(() => {
        appProducts()
    }, [])



    return (
        <div className="header" >
            <Home/>
        </div>
    )
}

export default Header
