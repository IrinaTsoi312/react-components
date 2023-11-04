import { useState, useEffect } from "react";
import Header from "../features/Header";
import SearchResult from "../features/SearchResult";
import { fetchAllCharacters } from "../services/fetchAPI";
import { ICharacter } from "../shared/interfaces";

export default function RootLayout() {
  const [data, setData] = useState<ICharacter[] | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchChars = async () => {
    try {
      const res = await fetchAllCharacters();
      if (res !== null && res.results) {
        setData(res.results);
        setLoading(false);
      } else {
        throw new Error("Invalid response from fetch request");
      }
    } catch (err: unknown) {
      setLoading(false);
      throw new Error(`${err}`);
    }
  };

  useEffect(() => {
    fetchChars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapper">
      <Header onFetch={fetchChars} />
      <SearchResult data={data || []} />
    </div>
  );
}
