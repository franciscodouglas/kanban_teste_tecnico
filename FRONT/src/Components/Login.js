import React, { useRef } from 'react'
import { Container,Card, Form, Button } from 'react-bootstrap';
import { useAuth } from '../Hook/useAuth'


export default function Login() {

    const Username = useRef()
    const Password = useRef()
    const { login } = useAuth()


    const handleSubmit = async (e) => {

        e.preventDefault()

        await login(
            Username.current.value,
            Password.current.value
        )
    }

    return (

        <Container className='mt-5 bd-highlight mb-3
          row d-flex justify-content-center' >
                
            <Card style={{width: '30rem' }}
                className='mt-5 p-5 mb-3  shadow p-3  rounded'>
                <div className='text-center'>
                <h3>Autenticar KANBAN</h3>
                </div>
                <Card.Body>
                    <Form className='mt-2 flex-column bd-highlight mb-3
                    align-items-center'>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Usuário</Form.Label>
                            <Form.Control
                                type="text"
                                className="d-flex p-2"
                                placeholder="Digite o seu Username"
                                ref={Username}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Digite a sua senha"
                                ref={Password}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            className='mt-4 d-flex '
                            onClick={handleSubmit}
                        >
                            Entrar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>


    );
}