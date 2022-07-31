import { Col, Container, Row, Card } from 'react-bootstrap';
import List from './List'
import { useCookies } from 'react-cookie'
import { getCards } from '../Services/cards'
import { useEffect } from 'react';
import { useLists } from '../Hook/useLists'
import { useAuth } from '../Hook/useAuth';
import Alert from 'react-bootstrap/Alert';

export default function Board() {

    const [cookies] = useCookies(['authToken']);
    const { setListCards } = useLists()
    const { setUser } = useAuth()
    // const [show, setShow] = useState(true);

    useEffect(() => {

        let gotCards = false
  
        getCards(cookies)
            .then(list => {

                if (!gotCards)
                    setListCards(list)
            })
            .catch(error => {
                alert(error.message)
                setUser(null)
        
            })

        return () => gotCards = true

    }, [])

    return (

        <Card style={{ minHeight: '53rem' }}
            className='mb-3 mt-4 p-2 shadow p-3 bg-body rounded '>
            <Card.Body>
                <Container className='flex-nowrap
                    justify-content-center mt-5 '>
                    <Row className='flex-nowrap
                    justify-content-center'>

                        <Col>
                            <List lista={'ToDo'} />
                        </Col>

                        <Col className='square border-start'>
                            <List lista={'Doing'} />
                        </Col>

                        <Col className='square border-start'>
                            <List lista={'Done'} />
                        </Col>
                    </Row>

                </Container>
            </Card.Body>
        </Card>
    );
}