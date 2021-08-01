const {Router} = require('express')
const router = Router()
const Cart = require('../models/Cart')


router.post('/cart', (req, res) => {

    const cart = new Cart(req.body)

    cart.save()
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

router.get('/cartAll', (req, res) => {

    const promise = Cart.find({})

    promise.then(data => res.json(data))
            .catch(err => console.log(err))
})

router.delete('/delete/:id', (req, res) => {

    const promise = Cart.findByIdAndRemove(req.params.id)

    promise.then(() => console.log("delete"))
            .catch((err) => console.log(err))
})

module.exports = router