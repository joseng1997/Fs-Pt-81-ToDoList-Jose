import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    //crear tasks nuevas a las que ya existían
    e.preventDefault(); //que no se recargue la pagina
    if (task.trim() === "") {
      alert("Por favor, escribe una tarea antes de agregarla."); //si task esta vacío no deja enviar
      return;
    }
    setList([...list, task]); //agrega tarea
    setTask(""); //limpia el recuadro para agregar nueva tarea
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleDelete = (indexToDelete) => {
    setList(list.filter((_, i) => i != indexToDelete)); //filtra (elimina) las tareas
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={task}
          placeholder="Escribe una tarea..."
        />
      </form>
      <ul>
        {list.length > 0 ? (
          list.map((task, i) => (
            <li key={i}>
              {task}{" "}
              <span className="delete-button" onClick={() => handleDelete(i)}>
                X
              </span>
            </li>
          ))
        ) : (
          <li> No hay tareas, añadir tareas</li>
        )}
      </ul>
      <p>Contador de tareas: {list.length}</p>
    </div>
  );
};

export default Home;
