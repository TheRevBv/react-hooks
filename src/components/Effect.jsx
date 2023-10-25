/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";

const Effect = () => {
  // Agregamos un state para guardar los datos:
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");

  // Agregamos una función para hacer una petición a jsonPlaceHolder:
  const getUsuarios = useCallback(async () => {
    let route = "https://jsonplaceholder.typicode.com/users/";

    if (input !== "") {
      route = `https://jsonplaceholder.typicode.com/users/${input}`;
    }

    const res = await fetch(route);
    const data = await res.json();

    let usersData = [];

    if (!Array.isArray(data)) {
      // Convertimos el JSON object en array:
      usersData.push(data);
      // Modificamos el state:
      setUsers(usersData);
    } else {
      setUsers(data);
    }
  }, [input]);

  // Agregamos un useEffect para evitar el problema:
  useEffect(() => {
    getUsuarios();
  }, [input, getUsuarios]);

  console.log(users);

  const handleSubmit = (e) => {
    // Evitamos el comportamiento normal del Submit:
    e.preventDefault();
    // Obtenemos el valor del input:
    const text = e.target[0].value;
    setInput(text);
  };

  return (
    <>
      <h1>UseEffect</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="txtSearch" className="form-label">
            Search
          </label>
          <input
            type="text"
            name="inputText"
            id="txtSearch"
            className="form-control"
            aria-description="search"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Submit
        </button>
      </form>

      {users.map((user) => {
        return (
          <div key={user.id} className="card">
            <div className="card-body">{user.name}</div>
          </div>
        );
      })}
    </>
  );
};

export default Effect;
