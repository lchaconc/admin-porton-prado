import React from 'react';


function Detalles(props) {
    let item = props.item;
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h3>{item.nombre}</h3>
                    <p className="item-detalles">
                        <span className="badge badge-info">
                            Categoría: {item.nombreTipo}
                        </span> 
                    </p>
                </div>                
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-12">
                <p className="item-detalles">
                    <span className="badge badge-info">
                        Contacto: 
                    </span> {item.contacto}                
                </p>
                <p className="item-detalles">
                    <span className="badge badge-info"> 
                    Ubicación: 
                    </span> {item.ubicacion}
                </p>
                <p className="item-detalles">
                    <span className="badge badge-info">
                        Horario: 
                    </span> {item.horario}                
                </p>
                <p className="item-detalles">
                    <span className="badge badge-info">
                        Teléfono 1: 
                    </span> {item.telefono1}         
                </p>
                <p className="item-detalles">
                    <span className="badge badge-info">
                        Teléfono 2: 
                    </span> {item.telefono2}    
                </p>
                <p className="item-detalles">
                    <span className="badge badge-info">
                        Facebook: 
                    </span>
                    <a href={item.face} target="_blank" rel="noopener noreferrer" >
                    {item.face}
                </a>
                </p>


                <br/>
                <div className="alert alert-secondary">
                    {item.descripcion}
                </div>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                    {
                        item.activo === "1" ?
                            <i 
                                title="0" 
                                onClick={props.handleActivarNegocio}
                                data-idcomercio={item.idComercio} 
                                className="fas fa-toggle-on text-success icono-2"></i>                                
                        :
                            <i 
                                title="1" 
                                onClick={props.handleActivarNegocio}
                                data-idcomercio={item.idComercio} 
                                className="fas fa-toggle-off icono-2" ></i>
                    }

                </div>
            </div>
        </React.Fragment>
    );

}


export default Detalles;