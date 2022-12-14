import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  
  
  const submit = (data) => {
    axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
      .then(res => {
        localStorage.setItem("token", res.data.data.token);
        navigate("/");
        alert("usuario loggeado")
      })
      .catch(error => {
        if (error.response?.status === 404) {
          alert("credenciales invalidas")
        }
        console.log(error.response)
      });
  }

  return (
    <div>
      <h1>
        login
      </h1>
      <Form onSubmit={handleSubmit(submit)}>
        <Form.Group Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control {...register("email")} type="email" placeholder="Enter email" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control {...register("password")} type="password" placeholder="password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;