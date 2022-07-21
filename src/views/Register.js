import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Slider from '../components/Slider';

const sliderContents = [
	{ imageUrl: '/images/blog-img-01.jpg', text: 'Awesome slide description' },
	{ imageUrl: '/images/blog-img-02.jpg', text: 'Awesome slide description' },
	{ imageUrl: '/images/blog-img-03.jpg', text: 'Awesome slide description' },
];
const loginLogo = '/images/favicon.png';

function Register() {
  return (
    <>
        <Slider slides={sliderContents}/>
    <Form className='d-flex flex-row flex-wrap register-login-form'>
        <div>
            <img src={loginLogo} alt='login logo' />
            <h2> Registrate en SOMOS MÁS +</h2>
        </div>
      <Form.Group className="form-group mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre/s</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Ingrese su nombre" />
      </Form.Group>

      <Form.Group className="form-group mb-3" controlId="formBasicEmail">
        <Form.Label className='p-5'>Apellido/s</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Ingrese su apellido" />
      </Form.Group>

      <Form.Group className="form-group mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="ejemplo@gmail.com" />
      </Form.Group>

      <Form.Group className="form-group mb-3" controlId="formBasicEmail">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Al menos 8 caracteres" />
      </Form.Group>

      <Form.Group 
      className="form-group mb-3" 
      controlId="formBasicPassword">
        <Form.Label>Repetir contraseña</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Reingrese su contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox" 
        label="Acepto los términos y condiciones" />
      </Form.Group>
      <Button 
      variant="primary" 
      type="submit">
        Enviar
      </Button>
    </Form>
    </>
    
  );
}

export default Register;