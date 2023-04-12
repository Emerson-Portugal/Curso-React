import React from "react";
import ReactDOM from "react-dom/client";

// // Retorno Normal

// function Greeting() {
//   return <>Mi primer Componente</>;
// }

// Retorno JSX

// function Greeting() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "Hola Mundo")
//   );
// }

// Anidado de componentes

/* 
function Greeting() {
  return (
    <React.Fragment>
      <Persona />
      <Descripcion />
    </React.Fragment>
  );
}

const Persona = () => <h2>Oscar Salcedo</h2>;
const Descripcion = () => {
  return <p>Soy humano</p>;
};
*/

// Aplicacion de Libros
// Conjunto de libros(ListaLibros)
// Caracteristicas de los libros (Libros)
// autor, imagen, titulo, son los componentes de los libros ()

const ListaLibros = () => {
  return (
    <section>
      <Libros />
      <Libros />
      <Libros />
      <Libros />
    </section>
  );
};

const Libros = () => {
  return (
    <article>
      <Imagen />
      <Titulo />
      <Autor />
    </article>
  );
};

const Imagen = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL127_SR127,127_.jpg"
    alt="Las 48 leyes del poder"
  />
);
const Titulo = () => <h2>Las 48 leyes del poder</h2>;
const Autor = () => {
  return <h4> Robert Greene </h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<Greeting></Greeting>);
root.render(<ListaLibros />);
