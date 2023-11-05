import { ICharacter } from "../shared/interfaces";

export default function Card(props: ICharacter) {
  return (
    <div className="char" key={props.id}>
      <div
        className="char-img"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
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
      </div>
    </div>
  );
}
