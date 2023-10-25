import { useEffect, useState } from "react";

const EffectHook = () => {
  const [count, setCount] = useState(0);

  //Definimos el hook useEffect el cual permite controlar el ciclo de vida
  //de los componentes, reemplazando a los métodos del ciclo de vida componentDidMount, componentDidUpdate y componentWillUnmount.
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `Has hecho click ${count} veces`;
  }, [count]);

  return (
    <>
      <p>Has hecho click {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Haz click</button>
    </>
  );
};

export default EffectHook;
