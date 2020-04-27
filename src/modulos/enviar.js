const axios = require('axios');

function enviar(url, data, cbs, cbe ) {

  console.log("data a enviar", data);
  

  axios.post(url, data )
    .then((response) => {
      console.log(response);      
      cbs(response);      
      
    }, (error) => {
      console.log(error);
      alert("Error al intentar enviar datos, intente de nuevo. Si el error persiste inténtelo más tarde." );
      console.log("error", error);
    });
}

export default enviar;