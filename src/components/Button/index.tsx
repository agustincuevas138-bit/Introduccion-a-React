import { ReactNode } from "react";
import styled from "styled-components";

// BtnProps describe la propiedad que styled-components usa dentro de la plantilla
const Btn = styled.button<BtnProps>`
  // El color cambia segun el estado de carga.
  background-color: ${(props) => (props.isLoading ? "gray" : "red")};
  // Aumentamos el espacio interno para que el boton sea mas comodo.
  padding: 25px 30px;
`;

// Propiedad opcional usada para cambiar el estilo del boton
type BtnProps = {
  isLoading?: boolean;
};

type Props = {
  children?: ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
};

//const styles = {
//  backgroundColor: "blue",
//};

// console.log(styles);
// Componente de boton reutilizable para acciones de la interfaz
function Button({ children, isLoading, onClick }: Props) {
  //   const className = [
  //     `btn btn-${isLoading ? "secondary" : "primary"}`,
  //     styles.button,
  //     styles.padded,
  //   ].join(" ");

  return (
    <Btn
      //style={styles}
      onClick={onClick}
      type="button"
      //className={[styles.button, styles.padded].join(" ")}
      //className={className}
      // disabled evita nuevos clicks mientras se esta cargando
      disabled={isLoading}
      // Pasamos el estado al componente estilizado para calcular el color
      isLoading={isLoading}
    >
      {isLoading ? "Cargando..." : children}
    </Btn>
  );
}
export default Button;
