import { useEffect, useState } from 'react';

import { Movie } from '@/type/movie';
import baseRequest from '@/utils/axios';

export const useFetchMovies = (fetchUrl: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await baseRequest.get(fetchUrl);
      const movies = request.data.results.map((movie: Movie) => ({
        id: movie.id,
        name: movie.name,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
      }));

      setMovies(movies);
    }

    fetchData();
  }, [fetchUrl]);

  return movies;
};
