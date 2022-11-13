import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import "./Contact.css"

const Contact = () => {

  const [spin, setSpin] = useState(false);

  const [inputvalue, setInputValue] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: ""
  });

  const getvalue = (e) => {
    const { name, value } = e.target;

    setInputValue({ ...inputvalue, [name]: value })
  }

  const sentInputValue = async (e) => {
    e.preventDefault();

    const { fname, lname, email, mobile, message } = inputvalue;

    if (fname == "") {
      toast.error('fname is required', {
        position: "top-right",
      })
    } else if (lname == "") {
      toast.error('lname is required', {
        position: "top-right",
      })
    } else if (email == "") {
      toast.error('email is required', {
        position: "top-right",
      })
    } else if (!(email.includes("@"))) {
      toast.error('Enter valid email', {
        position: "top-right",
      })
    } else if (mobile == "") {
      toast.error('mobile is required', {
        position: "top-right",
      })
    } else {

      setSpin(true)

      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname, lname, email, mobile, message
        })
      });

      const response = await res.json();

      if (response.status == 201) {
        setInputValue({
          ...inputvalue, fname: "",
          lname: "",
          email: "",
          mobile: "",
          message: ""
        });
        toast.success('Your Response has Been Submitted!', {
          position: "top-right",
        })
        setSpin(false)
      } else {
        toast.warn('error for registration', {
          position: "top-right",
        })
      }
    }
  }


  return (
    <>
      <div className="container mb-3 contact">
        <h2 className='text-center'>Contact Us</h2>
        {spin ?
          <div className='d-flex justify-content-center align-items-center' style={{}}>
            <Spinner animation="border" variant="danger" />  &nbsp; &nbsp; Loading....
          </div> : ""}
        <div className="container mt-2">
          <Form className='row mt-3'>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name='fname' onChange={getvalue} value={inputvalue.fname} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name='lname' onChange={getvalue} value={inputvalue.lname} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" name='email' onChange={getvalue} value={inputvalue.email} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" name='mobile' onChange={getvalue} value={inputvalue.mobile} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name='message' onChange={getvalue} value={inputvalue.message} rows={4} />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" className='col-lg-6' onClick={sentInputValue} type="submit">
                Submit
              </Button>
            </div>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </>
  )
}

export default Contact