const {Router} = require('express')
const Products = require('../models/Products')
const router = Router()


// 

router.post('/product', (req, res) => {

        const product = new Products(req.body)

        product.save()
                .then(data => res.json(data))
                .catch(err => console.log(err))
})


router.get('/productAll', (req, res) => {

    const promise = Products.find({})

    promise.then(data => res.json(data))
            .catch(err => console.log(err))
})

router.delete('/delete/:id', (req, res) => {
        
        const promise = Products.findByIdAndRemove(req.params.id)

        promise.then(del => res.json(del))
                .catch(err => console.log(err))
})

router.put('/update/:id', (req, res) => {
        
        const promise = Products.findByIdAndUpdate(req.params.id, req.body)

        promise.then(mov => res.json(mov))      
                .catch(err => console.log(err))
})

// router.post('/update/:id', (req, res) => {

//         const promise = Products.find(res.body)

//         promise.then(data => res.json(data))
//                 .catch(err => console.log(err))
// })

module.exports = router

