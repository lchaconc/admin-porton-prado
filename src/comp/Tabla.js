import React from 'react';

function Tabla(props) {
    return (
        <table id="tblNivel" className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Contacto</th>
                    {
                        <React.Fragment>
                            <th scope="col"> Estado </th>
                        </React.Fragment>
                    }

                </tr>
            </thead>
            <tbody>
                {
                    props.array !== null &&
                    (
                        props.array.map((item, i) => (
                            <tr key={"negocio" + i}  >
                                {
                                    console.log("ID item",item.idComercio)
                                    
                                }
                                <th scope="row">{i + 1}</th>
                                <td>{item.nombre}</td>
                                <td>{item.contacto}</td>
                                {
                                    parseInt(item.activo) === 0 &&
                                    <td>
                                        <i 
                                            onClick={props.handleShow} 
                                            id={item.idComercio}                                         
                                            className="fas fa-eye-slash">                                                
                                        </i>
                                    </td>
                                }
                                {
                                    parseInt(item.activo) === 1 &&
                                    <td>
                                        <i                                            
                                            onClick={props.handleShow} 
                                            id={item.idComercio}
                                            className="far fa-eye">
                                        </i>
                                    </td>
                                }
                            </tr>
                        ))
                    )
                }
            </tbody>
        </table>
    )
}

export default Tabla;