import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddItem = () => {
  const navigate = useNavigate()

  const [canteen, setCanteen] = useState('')
  const [nameItem, setName] = useState('')
  const [priceItem, setPrice] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/v1/item`,
        {
          canteen_id: canteen,
          name: nameItem,
          price: priceItem,
          img_url: image,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            // 'auth-token': localStorage.getItem('token'),
          },
        },
      )
      .then((res) => {
        console.log(res.data.message)
        toast.success(res.data.message, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        })
        const inputCanteen = document.getElementById('canteen')
        inputCanteen.value = ''
        setCanteen('')

        const inputName = document.getElementById('name')
        inputName.value = ''
        setName('')

        const inputPrice = document.getElementById('price')
        inputPrice.value = ''
        setPrice('')

        const inputImage = document.getElementById('image')
        inputImage.value = ''
        setImage('')
        navigate('/items')
      })
      .catch((err) => {
        console.log(err.response.data.message)
        toast.error(err.response.data.message, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        })
      })
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicCanteen">
              <Form.Label>Name Canteen</Form.Label>
              <Form.Control type="text" placeholder="Insert Your Canteen" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name Items</Form.Label>
              <Form.Control type="text" placeholder="Insert Your Items" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Insert Your Price" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control type="text" placeholder="Insert Your Image" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default AddItem