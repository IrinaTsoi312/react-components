import { Component, ReactNode } from 'react';
import './Card.css';

interface CardProps {
  name: string;
  date: string;
  director: string;
  producer: string;
  description: string;
}

export default class Card extends Component<CardProps> {
  render(): ReactNode {
    const { name, date, director, producer, description } = this.props;
    return (
      <div className="film">
        <p className="filmName">
          <span className="title">Title: </span>
          {name}
        </p>
        <p className="film-release">
          <span className="title">Release Date: </span>
          {date}
        </p>
        <p className="film-director">
          <span className="title">Director: </span>
          {director}
        </p>
        <p className="film-producers">
          <span className="title">Producer: </span>
          {producer}
        </p>
        <p className="film-description">
          <span className="title">Description: </span>
          {description}
        </p>
      </div>
    );
  }
}
