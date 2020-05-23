import React from "react";

function Selector(props) {
  const handleClick = () => {
    let temaFondo = props.mode;

    if (temaFondo === "light") {
      temaFondo = "dark";
    } else {
      temaFondo = "light";
    }

    props.changeMode(temaFondo);
  };
  return (
    <>
      <div className="container-fluid quieto">
        <div className="d-flex justify-content-end">
        <div className="tit">Modo</div>
          <div className="btcheck">
            <input type="checkbox"  onClick={handleClick}/>
            <div><span className="sl">{props.mode}</span></div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Selector;
