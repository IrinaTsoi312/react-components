import { ReactNode } from "react";

export interface IFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export interface IFilmList {
  count: number;
  next: string | null;
  previous: string | null;
  results: IFilm[];
}

export interface IValueState {
  inputValue: string;
  showResults: boolean;
}

export interface ISearchResultsState {
  filmData: IFilmList | null;
}

export interface ISearchResultsProps {
  films: IFilmList[];
}

export interface IFilmData {
  title: string;
  release_date: string;
  director: string;
  producer: string;
  opening_crawl: string;
}

export interface IErrorBoundaryProps {
  children: ReactNode;
}

export interface IErrorBoundaryState {
  hasError: boolean;
}

export interface ErrorInfo {
  componentStack: string;
}
