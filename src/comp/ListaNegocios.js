import React, { useState, useEffect } from 'react';
import config from '../config.json';
import Tabla from './Tabla';
import Detalles from './Detalles';
import { Modal } from 'react-bootstrap';
import filtrar from '../modulos/filtrar';
import enviar from '../modulos/enviar';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';





function ListaNegocios(props) {
    const [arrayNegocios, setArrayNegocios] = useState(null);
    const [show, setShow] = useState(false);
    const [registro, setRegistro ] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        const idComercio= parseInt(e.target.id);
        setRegistro ( filtrar( arrayNegocios, "idComercio", idComercio )[0] );        
        setShow(true)
    };

    useEffect(() => {
        obtener();
    }, []);


    async function obtener() {
        let resp = await fetch(config.serv + "obtener_comercios_admin.php");
        setArrayNegocios(await resp.json());
    }

    const handleActivarNegocio =(e)=>{
        const activo= e.target.title;
        const idComercio= e.target.dataset.idcomercio;

        const dataform = {idComercio, activo}
        console.log("dataform",dataform);
        
        enviar(config.serv+"activar_negocio.php",dataform, function (resp) { 
            alertify
                .alert(config.nombre, resp.data.msj, function(){                    
                    obtener();
                    handleClose();
                });
         } )
    }

    return (
        <React.Fragment>            
            <div className="row">
                <div className="col-sm-12">
                    {
                        arrayNegocios ?
                        <Tabla handleShow={handleShow} array={arrayNegocios} />
                        :
                        <div className="alert alert-primary mt-5" role="alert">
                            <strong>Cargando datos. Por favor espere...</strong>
                        </div>

                        
                    }
                </div>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Detalles del negocio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Detalles handleActivarNegocio={handleActivarNegocio} item={registro} />
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );

}

export default ListaNegocios;