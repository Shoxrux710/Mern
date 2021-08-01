import React, {useEffect} from 'react'
import History from './History'
import {userCart} from '../redux/actions/appActions'
import {useDispatch} from 'react-redux'
import axios from 'axios'

const HistoryAll = () => {

    const dispatch = useDispatch()


    const appCart = async () => {

        const response = await axios.get("http://localhost:4000/cartapp/cartAll")
                                    .catch(err => console.log(err))

                                    dispatch(userCart(response.data))

    }

    useEffect(() => {
        appCart()
    }, [])
    
    return (
        <div>
            <History/>
        </div>
    )
}

export default HistoryAll
