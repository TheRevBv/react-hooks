import { useEffect, useState } from "react";

const State = () => {
  const [state, setState] = useState(0);

  //   console.log(state);

  //Usando el hook useEffect para controlar el ciclo de vida de los componentes
  //El hook useEffect recibe dos parámetros, el primero es una función que se ejecuta
  //cuando el componente se monta y se actualiza, y el segundo parámetro es un arreglo
  //de dependencias, las cuales se usan para indicarle al hook que se debe ejecutar
  //la función cuando alguna de las dependencias cambie.

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleClicked = () => {
    setState(state + 1);
  };

  return (
    <>
      <div className="text-center">
        <h1>UseState</h1>
        <hr />
        CUENTA : {state}
        <br />
        <button className="btn btn-primary" onClick={handleClicked}>
          Aumentar
        </button>
      </div>
    </>
  );
};

export default State;
