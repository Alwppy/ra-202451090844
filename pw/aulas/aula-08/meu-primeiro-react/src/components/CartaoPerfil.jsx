function CartaoPerfil(props) {
return (
      <div className="cartao">
        <span>{props.nome}</span>
        <h2>{props.emoji}</h2>
        <p>Curso: {props.curso}</p>
      </div>
    );
  }
export default CartaoPerfil;
