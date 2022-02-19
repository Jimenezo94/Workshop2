 import axios from 'axios';
 import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { url } from '../helpers/url';




export const List = () => {


     const [products, setProducts] = useState([])

    


    const getData = async () => {

        axios.get(url)
            .then(response => {
               // console.log(response.data);
                setProducts(response.data)
            }).catch(error => {
                console.log(error);
            })
    }


    useEffect(() => {
        getData()
    }, [])


     console.log(products);
     



    return (
        <div>
            <Row xs={1} md={5} className="g-4"   >
                { products.map(prod => (
                    <Col>
                        <Card  >
                            <Card.Img variant="top" src={prod.imagen}  alt="" />
                            <Card.Body  key={prod.id} >
                                <Card.Title>{prod.precio}</Card.Title>
                                <Card.Text>
                                    {prod.nombre}
                                </Card.Text>
                                    
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>


        </div>
    )
}