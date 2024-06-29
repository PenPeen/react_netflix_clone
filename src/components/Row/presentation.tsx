import { FC } from 'react';

import { Movie } from '@/type/movie';

type Props = {
  title: string;
  movies: Movie[];
  isLarge?: boolean;
};

const image_prefix = 'https://image.tmdb.org/t/p/original';

const RowPresentation: FC<Props> = ({ title, movies, isLarge }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${image_prefix}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default RowPresentation;
