import useData from "./usaData";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres;