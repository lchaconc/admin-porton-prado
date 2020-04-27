import React, {useState} from 'react';
import ListaNegocios from './comp/ListaNegocios';
import Login from './comp/Login';

const pwd = "hola456"


function App() {
  const [accesado, setAccesado]= useState(false);

  const login=(e)=> {
    const pwdUsuario = e.target.title;
    console.log(pwdUsuario);
    if (pwdUsuario === pwd) {
      setAccesado(true);
    }
    
  }

  return (
    <div className="container">
      {
        accesado ?
          <ListaNegocios />
          :
        <Login login={login} />
      }       
    </div>
  );
}

export default App;
