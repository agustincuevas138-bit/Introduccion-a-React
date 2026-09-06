import { Fragment } from "react";
import { ReactNode } from "react";

// Props define que Card debe recibir contenido hijo
interface Props {
  children: ReactNode;
}

// Card es un contenedor reutilizable para agrupar contenido visual
export function Card(props: Props) {
  const { children } = props;
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      {/* El contenido recibido entre las etiquetas Card aparece aqui */}
      <div className="card-children">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text?: string;
}

// CardBody muestra un titulo y un texto dentro de una tarjeta
export function CardBody(CardBodyProps: CardBodyProps) {
  const { title, text } = CardBodyProps;
  return (
    // Fragment agrupa el titulo y el parrafo sin crear otro elemento contenedor
    <Fragment>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </Fragment>
  );
}

export default Card;
