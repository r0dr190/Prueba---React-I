import MiApi from "./components/MiApi";

function App() {
  return (
    <div className="container">
      <h1 className="d-flex justify-content-center m-3">Prueba - React I</h1>
      <div>
        <p className="d-flex justify-content-center">Prueba de Consumo de API con React correspondiente a la Unidad React I</p>
        <p className="d-flex justify-content-center">
          La API usada en ésta prueba se encuentra en el siguiente link 
          <a className="text-decoration-none" href="https://jsonplaceholder.typicode.com/users">: typicode.com/users</a>
        </p>
        <p className="d-flex justify-content-center">
          Enlace a mi github 
          <a className="text-decoration-none" href="https://github.com/r0dr190">: github.com/r0dr190</a>
        </p>
        <p className="d-flex justify-content-center">
          Enlace a este proyecto en github 
          <a className="text-decoration-none" href="https://github.com/r0dr190/Prueba---React-I">: github.com/r0dr190/Prueba---React-I</a>
        </p>
        <p className="d-flex justify-content-center">
          Enlace al video explicación del código en vimeo 
          <a className="text-decoration-none" href="https://vimeo.com/manage/videos/812648349">: vimeo.com</a>
        </p>
      </div>
      < MiApi />
      <div>

      </div>
    </div>
    
  );
}

export default App;
