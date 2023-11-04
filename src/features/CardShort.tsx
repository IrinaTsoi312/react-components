import { ICharacter } from "../shared/interfaces";

export default function CardShort(props: ICharacter) {
  const customStyles = {
    backgroundImage: `url(${props.image})`,
  };

  return (
    <div className="char">
      <div className="char-img" style={customStyles}></div>
      <div className="char-data">
        <p className="char-info">
          <span className="title">Name: </span>
          {props.name}
        </p>
        <p className="char-info">
          <span className="title">Status: </span>
          {props.status}
        </p>
        <p className="char-info">
          <span className="title">Species: </span>
          {props.species}
        </p>
        <p className="char-info">
          <span className="title">Gender: </span>
          {props.gender}
        </p>
        <p className="char-info">
          <span className="title">Origin: </span>
          {props.origin.name}
        </p>
      </div>
    </div>
  );
}
