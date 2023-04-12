# Curso de React



## Instalacion de Create-React

```javascript
npx create-react-app my-app
```

## Principales Script


```javascript
npm start
```

```javascript
npm test
```

```javascript
npm run build
```

```javascript
npm run eject
```

## Componentes

Cada ves que vamos a crear un nuevo componente en React, se va a creaer una nueva funcion `componente -> funcion`



## Algunos Tips

- configura tu archivo `.gitignore` con estos parametros, la carpeta mas importante es `/node_modules`, que contiene toda las dependencias de tu proyecto, pero es el mas pesado, no se recomienda subirlo a `github`, para poder llevar tu proyecto a otras pc solo necesitas `package.json` y lo instalas 

```javascript
npm install
```

```git
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build
```

## Creacion de Componentes

- Crea el import, guarda la funcion es una constante y luego la exporta "arrow func with export"  `rafce`
```javascript
import React from 'react'

const testing = () => {
  return (
    <div>testing</div>
  )
}

export default testing
```

- Crea el import, crea una funcion y luego la exporta "regular func with export" `rfce`
```javascript
import React from 'react'

function testing() {
  return (
    <div>testing</div>
  )
}

export default testing
```

## JSX vs Estandar

- JSX, es un tipo de escritura para la creacion de elementos html, implementado por React

  - Un solo Elemento
    ```javascript
    import React from "react";
    import ReactDOM from "react-dom/client";

    function Greeting() {
      return React.createElement("h2", {}, "Hola Mundo");
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<Greeting></Greeting>);
    ```
  - Mas de un elemento

    ```javascript
    import React from "react";
    import ReactDOM from "react-dom/client";

    function Greeting() {
      return React.createElement(
        "div",
        {},
        React.createElement("h2", {}, "Hola Mundo")
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<Greeting></Greeting>);
    ```



- Estandar, es para forma de retornar los valores HTML en React

  - Un solo Elemento

    ```javascript
    import React from "react";
    import ReactDOM from "react-dom/client";

    function Greeting() {
      return <h2>Mi primer Componente</h2>;
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<Greeting></Greeting>);
    ```
  - Mas de un Elemento

    ```javascript
    import React from "react";
    import ReactDOM from "react-dom/client";

    function Greeting() {
      return( 
        <div>
          <h2>Mi primer Componente</h2>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<Greeting></Greeting>);
    ```

## Reglas de JSX

- Cuando trabajamos con los componentes, siempre de los siempres debe devolver un solo elemento, es decir que si quieres enviar un conjunto de elementos, tiene que estar envuelto en un `div` y todo ese conjunto de elementos, sea un elemento.

- Se recomienda seguir la sentencia o sementica `selection\article`
- Para enviar ese conjunto de elementos y envolverlos en un `div`, se recomienda enviarlo con este sintaxis y omitir el `div`
```javascript
function Greeting() {
  return (
    <React.Fragment >
      <h2>Mi primer Componente</h2>;
    </React.Fragment >
  );
}
```
## Anidado de Componentes

- Una forma de tener un componente y anidarle mas componentes, hay que tener mucho cuidado como utilizamos ese tipo de anidado 

```javascript
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
```