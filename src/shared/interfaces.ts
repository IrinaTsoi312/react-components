import { ReactNode } from "react";

export interface IFilmAllData {
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

export interface IValueState {
  inputValue: string;
}

export interface ISearchResultsState {
  filmData: IFilmData | null;
}

export interface ISearchResultsProps {
  films: IFilmData[];
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
