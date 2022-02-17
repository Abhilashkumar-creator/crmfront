import React from 'react'
import {Form, Button} from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export const Signinpage = ({handleOnChange, handleOnSubmit,switchForm, email, password}) => {
  return (
    <div>
        <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                     onChange={handleOnChange} type="email" name="email"
                    value={email} placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                     onChange={handleOnChange} type="password" name="password"
                    value={password} placeholder="Password" />
                </Form.Group>
                <hr />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <hr/>

                <a href='#' onClick={() => switchForm('reset')}>Forgot Password</a>
            </Form>
    </div>
  )
}
