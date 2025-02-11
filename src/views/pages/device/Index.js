import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import DeviceTable from './table'
import { useNavigate } from 'react-router-dom'

const Device = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/devices/add')
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h4>Device</h4>
            <Button variant="primary" onClick={handleNavigate}>
              Add Device
            </Button>
          </div>
          <DeviceTable />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Device
