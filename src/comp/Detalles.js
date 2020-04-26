import React from 'react';


function Detalles(props) {
    let item = props.item;
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h3>{item.nombre}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                <h4>
                    <span className="badge badge-info">
                        Nombre del contacto: {item.contacto}
                    </span>                
                </h4>
                <h4>
                    <span className="badge badge-info">
                        Ubicación: {item.ubicacion}
                    </span>                
                </h4>
                <h4>
                    <span className="badge badge-info">
                        Horario: {item.horario}
                    </span>                
                </h4>
                <h4>
                    <span className="badge badge-info">
                        Teléfono: {item.telefono1}
                    </span>                
                </h4>
                <a href={item.face} target="_blank" rel="noopener noreferrer" >
                    {item.face}
                </a>
                <br/>
                <div className="alert alert-secondary" role="alert">
                    {item.descripcion}
                </div>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                    {
                        item.activo === "1" ?
                            <i className="fas fa-toggle-on text-success"></i>                                
                        :
                            <i className="fas fa-toggle-off"></i>
                    }

                </div>
            </div>
        </React.Fragment>
    );

}


export default Detalles;