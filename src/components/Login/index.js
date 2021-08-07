import React from "react";
import { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";

const Login = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className='text-center mb-4'>Sign Up</h2>
					<Form.Group id='email'>
						<Form.Lable>Email</Form.Lable>
						<Form.Control type='email' ref={emailRef} required></Form.Control>
					</Form.Group>
					<Form.Group id='password'>
						<Form.Lable>Password</Form.Lable>
						<Form.Control
							type='password'
							ref={passwordRef}
							required
						></Form.Control>
					</Form.Group>
					<Form.Group id='password-confirm'>
						<Form.Lable>Password Confirmation</Form.Lable>
						<Form.Control
							type='password-confirm'
							ref={passwordConfirmRef}
							required
						></Form.Control>
					</Form.Group>
					<Button type='submit' className='w-100'>
						Sign Up
					</Button>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>
				Already have an account? Sign In
			</div>
		</>
	);
};

export default Login;
