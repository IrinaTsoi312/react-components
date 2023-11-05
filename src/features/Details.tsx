import { ICharacter } from "../shared/interfaces";

export default function Details(props: ICharacter) {
  const customStyles = {
    backgroundImage: `url(${props.image})`,
  };

  return (
    <div className="details">
      <div className="details-img" style={customStyles}></div>
      <div className="details-data">
        <p className="details-info">
          <span className="title">Name: </span>
          {props.name}
        </p>
        <p className="details-info">
          <span className="title">Status: </span>
          {props.status}
        </p>
        <p className="details-info">
          <span className="title">Species: </span>
          {props.species}
        </p>
        <p className="details-info">
          <span className="title">Gender: </span>
          {props.gender}
        </p>
        <p className="details-info">
          <span className="title">Origin: </span>
          {props.origin?.name}
        </p>
        <p className="details-info">
          <span className="title">location: </span>
          {props.location?.name}
        </p>
        <p className="details-info">
          <span className="title">Origin: </span>
          {props.origin?.name}
        </p>
      </div>
    </div>
  );
}
