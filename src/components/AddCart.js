import React, {useState} from 'react'
import { Container } from 'react-bootstrap';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddCart = () => {


    const history = useHistory()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState("")


    const Submit = (e) => {
        
        e.preventDefault()

        const formData = {
            title: title,
            description: description,
            price: price,
            image: image,
            category: category
        }
        axios.post("http://localhost:4000/app/product", formData)
              .then(res => console.log(res))  

              history.push('/')
    }  




    return (
        <div className="form">
             <Container>
                  <form onSubmit={Submit}>
                  <div className="form-group">
                          <label>Title:</label>
                          <input
                           type="text"
                           required
                           className="form-control"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           />
                      </div>
                      <div className="form-group">
                          <label>Description:</label>
                          <textarea
                           type="text"
                           required
                           className="form-control"
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}
                           />
                      </div>
                      <div className="form-group">
                          <label>Price:</label>
                          <input
                           type="number"
                           required
                           className="form-control"
                           value={price}
                           onChange={(e) => setPrice(e.target.value)}
                           />
                      </div>
                      <div className="form-group">
                          <label>Category:</label>
                          <input
                           type="text"
                           required
                           className="form-control"
                           value={category}
                           onChange={(e) => setCategory(e.target.value)}
                           />
                      </div>
                      <div className="form-group">
                          <label>Image:</label>
                          <input
                           type="text"
                           required
                           className="form-control"
                           value={image}
                           onChange={(e) => setImage(e.target.value)}
                           />
                      </div>
                      <button type="submit" className="btn btn-success">update</button>
                  </form>
              </Container>
        </div>
    )
}

export default AddCart
