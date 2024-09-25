// No se requieren estos archivos 
//import logo from './logo.svg';
import './App.css';

function App() {
  const maquiladora = <p>Maquilado JEM S.A  </p>;
  const usuario = <div> {maquiladora} </div>;
  const salto = <br/>;

  const label_numero_orden = <label for="n_Orden">Número de Orden:</label>;
  const input_numero_orden = <input id="n_Orden" type="text" name="n_Orden" />;
  const numero_orden = <div> {label_numero_orden} {input_numero_orden} </div>;

  const label_numero_linea = <label for="n_linea">Número de Linea:</label>;
  const input_numero_linea = <input id="n_Linea" type="text" name="n_Linea" />;
  const numero_linea = <div> {label_numero_linea} {input_numero_linea} </div>;
  
  const label_numero_parte = <label for="c_Parte">Número de Parte:</label>;
  const input_numero_parte = <input id="c_Parte" type="text" name="c_Parte" />;
  const numero_parte = <div> {label_numero_parte} {input_numero_parte} </div>;

  const label_numero_descrip = <label for="c_descrip">Descripcion:</label>;
  const input_numero_descrip = <input id="c_descrip" type="text" name="c_descrip" />;
  const descrip = <div> {label_numero_descrip} {input_numero_descrip} </div>;

  const label_numero_piezas = <label for="n_Piezas">Cantidad de piezas:</label>;
  const input_numero_piezas = <input id="n_Piezas" type="number" name="n_Piezas" />;
  const numero_piezas = <div> {label_numero_piezas} {input_numero_piezas} </div>;

  const label_precio_pieza = <label for="n_Precio">Precio de la pieza:</label>;
  const input_precio_pieza = <input id="n_Precio" type="number" name="n_Pprecio" />;
  const precio = <div> {label_precio_pieza} {input_precio_pieza} </div>;

  const btn_cancela = <button type="button" >Cancelar</button>;
  const btn_guarda =  <button type="button" >Guardar</button>;
  const btn_opcion = <div> {btn_cancela}  {btn_guarda} </div>

  return (
    <div className="App">
      <header className="App-header">
        {/*  <img src={logo} className="App-logo" alt="logo" />  */}

        <h1>Control de Productos</h1>
        {usuario}
        {numero_orden}
        {numero_linea}
        {numero_parte}
        {descrip}
        {numero_piezas}
        {precio}
        {salto}
        {btn_opcion}
        

        {/* --------------------------
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

            NO se ocupa 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        -------------------------- */}
      </header>
    </div>
  );
}

export default App;
