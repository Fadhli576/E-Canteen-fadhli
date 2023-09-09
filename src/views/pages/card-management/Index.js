import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CardsManagement = () => {
  return (
    <div className="card">
      <div className="card-body">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name Cards</Form.Label>
            <Form.Control type="text" placeholder="Insert Your Cards" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default CardsManagement