import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Message'
import Loader from '../Loader'
import FormContainer from '../FormContainer'
import { login } from '../../redux/actions/userAction'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/admin/userlist'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
     <div style={{marginTop:"70px"}}> 
      <h1><center>LOGIN</center></h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label style={{marginLeft:"82px"}}>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label style={{marginLeft:"82px"}}>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <center>
        <Button type='submit' variant="secondary" style={{backgroundColor: "#3FB6BF"}}>
          LOGIN
        </Button>
        </center>
      </Form>
      
      <Row className='py-3'  style={{marginLeft:"258px"}}>
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
     </div> 
    </FormContainer>
  )
}

export default LoginScreen