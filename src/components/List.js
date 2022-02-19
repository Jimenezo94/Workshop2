// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
// import { url } from '../helpers/url';
import '../styles/List.css';

export const List = () => {


    // const [cars, setCars] = useState([])


    // const getData = async () => {

    //     axios.get(url)
    //         .then(response => {
    //             //console.log(response.data);
    //             setCars(response.data)
    //         }).catch(error => {
    //             console.log(error);
    //         })

    // }


    // useEffect(() => {
    //     getData()
    // }, [])


    // console.log(cars);



    // const DeleteCar = (id) => {

    //     axios.delete(url + id)
    //         .then(response => {
    //             getData()
    //         }).catch(error => {
    //             console.log(error)
    //         })
    // }


    return (
        <div>
            {/* <table className="tabla">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cars.map(car => (
                            <tr key={car.id} >
                                <th>{car.brand}</th>
                                <th>{car.model}</th>
                                <th>{car.year}</th>
                                <th><img src={car.imagen} width="40" height="50" alt="car" /></th>
                                <th><button onClick={() => DeleteCar(car.id)}  >Delete car</button></th>
                            </tr>
                        ))

                    }


                </tbody>

            </table>
            <hr /> */}


            <Row xs={1} md={5} className="g-4">
                {Array.from({ length: 10 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Precio</Card.Title>
                                <Card.Text>
                                    Producto
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>


        </div>
    )
}