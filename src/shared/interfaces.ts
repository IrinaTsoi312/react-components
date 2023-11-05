import { ReactNode } from "react";

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender: string;
  origin?: {
    name: string;
    url: string;
  };
  location?: {
    name?: string;
    url?: string;
  };
  image: string;
  episode?: string[];
  url?: string;
  created?: string;
}

export interface IAllCharacters {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: [];
}

export interface ICardData {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
}

export interface ISearchResultProps {
  data: ICharacter[];
}

export interface IErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

export interface IErrorBoundaryState {
  hasError: boolean;
}

export interface IDataProviderProps {
  children: ReactNode;
}

export interface IPaginationProps {
  fetchChars: (currentPage: number) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  pages: number;
}
