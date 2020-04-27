import React, {useState} from 'react';


function Login (props) {

    const [pwd, setPwd]= useState(null);

    const handleObtenerPwd =(e)=>{
        setPwd(e.target.value);
    }


    return (
        <React.Fragment>
            <div className="jumbotron text-center">
                <h2>Administración</h2>
            </div>
            <form className="text-center">
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Usuario</label>
    <input type="email" className="form-control" id="exampleInputEmail1" />

  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input 
        type="password" 
        className="form-control" 
        id="exampleInputPassword1" 
        onChange={handleObtenerPwd }
        />
  </div>
  <hr/>  
  <button 
    type="button" 
    title= {pwd}
    onClick= {props.login}
    className="btn btn-info">Acceder</button>
</form>
        </React.Fragment>
    );
}


export default Login;