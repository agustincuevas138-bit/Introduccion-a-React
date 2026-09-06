import Card from "./components/Card.tsx";
import List from "./components/List.tsx";
import Button from "./components/Button/index.tsx";
import { useState } from "react";
/**
 * truthy
 * falsy
 */

// Este componente representa la pantalla principal de la aplicacion
function App() {
  // data es el estado local que contiene los elementos mostrados por List
  const [data, setData] = useState(["Tanjiro", "Goku", "Naruto"]);

  //const [isLoading, setIsLoading] = useState(false);
  //const handleClick = () => {
  //  setIsLoading(!isLoading);
  //};
  //const list: string[] = ["Tanjiro", "Goku", "Naruto"];
  //const handleSelect = (elemento: string) => {
  //  console.log("imprimiendo", elemento);
  //};
  //const contenido = list.length !== 0 && (
  //  <List data={list} onSelect={handleSelect} />
  //);
  //return (
  //  <Card>
  //    <CardBody title="Hola Mundo" text="Este es el texto del componente" />
  //    {contenido}
  //    <Button onClick={handleClick} isLoading={isLoading}>
  //      Click me
  //    </Button>
  //  </Card>
  //);
  // Agrega un nuevo elemento creando un array nuevo a partir del estado actual
  const addMinion = () => {
    setData([...data, "Minion"]);
  };
  // filter devuelve todos los elementos excepto los que coinciden con "Minion"
  const delMinion = () => {
    setData(data.filter((item) => item !== "Minion"));
  };
  // JSX describe la estructura que React transforma en elementos de la interfaz
  return (
    <Card>
      <Button isLoading={true} onClick={addMinion}>
        Agregar
      </Button>
      <Button isLoading={false} onClick={delMinion}>
        Eliminar
      </Button>
      <List data={data} onSelect={(element) => console.log(element)} />
    </Card>
  );
}
export default App;
