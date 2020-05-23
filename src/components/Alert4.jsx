import React from "react";


const alert4 = (props) => {

  // const verId = () => {
  //   console.log(props.id)
  // };

  return (
    <>
      <tr>
        <td>{props.tarea}</td>
        <td>{props.nombre}</td>
        <td>{props.email}</td>
        <td> <i className="fas fa-times-circle rojox" /*onMouseEnter= {verId}*/  onClick={() => props.remove(props.id)}></i></td>
      </tr>
      {/* <div className="alert alert-info" role="alert">
        tarea: {props.tarea}
      </div>
      <div className="alert alert-info" role="alert">
        Nombre: {props.nombre}
      </div>
      <div className="alert alert-info" role="alert">
        Email: {props.email}
      </div> */}
    </>
  );
};
export default alert4;
