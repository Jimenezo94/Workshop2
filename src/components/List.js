import axios from "axios";
import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url = "https://workshop-tienda.herokuapp.com/registros/";


export default class List extends Component {

 
    constructor(props){
        super(props);
        this.state = {
            data: [],
            modalEliminar: false,
            info:{
                id:'',
                precio:'',
                nombre:'',
                imagen: '',
            
            },
            productosAdd:[]
            
        }
    }
   

    componentDidMount(){
        this.peticionGet();
    }

   
    Seleccionarproducto = (producto) => {

         this.setState({
             info: {
                
                id: producto.id,
                precio: producto.precio,
                nombre: producto.nombre,
                imagen: producto.imagen,
             }
         })
         console.log(producto)
         console.log(this.state.info)

         this.setState({modalEliminar: true})

    }

    peticionGet=()=>{
        axios.get(url)
        .then(response => {
            this.setState({data: response.data})
            this.peticionGet();
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    
   
    peticionDelete = async () => {
        await axios.delete(url+this.state.form.id)
        .then(response => {
            this.setState({modalEliminar:false});
            this.peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }

    agregarProduct = () => {
        this.setState({
            productosAdd : [...this.state.productosAdd, this.state.info],
        
        })
console.log(this.state.productosAdd)

    }

    render() {
        return (
            <div className="container">

                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Documento</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(prod => {
                                return(
                                    <tr key={prod.id}>
                                        <td>{prod.precio}</td>
                                        <td>{prod.nombre}</td>
                                        <td>{}</td>
                                  
                                        <td><img src={prod.imagen} width="50px" height="70px" alt=""/></td>
                                         <button className="btn btn-danger"
                                         onClick={() => {this.Seleccionarproducto(prod); this.setState({modalEliminar: true})}}></button>
                                    </tr>
                                )
                            })
                        }
                      
                    </tbody>
                </table>

               

                <Modal isOpen={this.state.modalEliminar}>
                
                    <ModalBody>
                        <div>
                        {
                                    <tr key={this.state.info.id}>
                                        <td>{this.state.info.nombre}</td>
                                        <td>{this.state.info.precio}</td>
                                        <td><img src={this.state.info.imagen} width="70px" height="80px" alt=""/></td>
                                         <button className="btn btn-danger"
                                         onClick={() => {this.peticionGet(1); this.setState({modalEliminar: true})}}></button>
                                    </tr>
                        }
                        </div>
                    
                 
                    </ModalBody>
                    <ModalFooter>
                        <div>
                        <button className="btn btn-danger"
                       onClick={() => this.agregarProduct()}>Agregar</button>
                        <button className="btn btn-secundary"
                       onClick={() => this.setState({modalEliminar:false})}>X</button>
                        </div>
                    </ModalFooter>
                </Modal>
            </div>
                
        )
    }
}
