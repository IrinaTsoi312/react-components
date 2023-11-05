import { IAllCharacters } from "../shared/interfaces";

const url = "https://rickandmortyapi.com/api/character";

export async function fetchAllCharacters() {
  let result: IAllCharacters | null = null;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  result = await response.json();
  return result;
}

export async function searchCharacter(searchTerm: string) {
  let result = null;
  const response = await fetch(`${url}/?name=${searchTerm}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  result = await response.json();
  return result;
}
