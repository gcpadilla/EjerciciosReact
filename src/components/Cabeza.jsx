import React from "react";
import Alert4 from "./Alert4";

const cabeza = (props) => {
  const mostrar = props.tareas.map((tarea) => (
    <Alert4
      tarea={tarea.tarea}
      nombre={tarea.name}
      email={tarea.email}
      id={tarea.id}
      key={tarea.id}
      remove={props.remove}
    />
  ));
  return (
    <>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Tarea</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{mostrar}</tbody>
      </table>
    </>
  );
};
export default cabeza;
