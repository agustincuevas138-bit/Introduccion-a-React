import { useState } from "react";

// Props documenta los datos y el callback que necesita la lista
type Props = {
  data: string[];
  onSelect: (elemento: string) => void;
};

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(1);
  const handleClick = (i: number, elemento: string) => {
    setIndex(i);
    onSelect?.(elemento);
  };
  // map crea un <li> por cada elemento del array recibido
  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          onClick={() => handleClick(i, elemento)}
          // key ayuda a React a identificar cada elemento al actualizar la lista
          key={elemento}
          // La clase active se agrega solamente al indice seleccionado
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
