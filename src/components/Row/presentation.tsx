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
    <div className="ml-5 text-white">
      <h2>{title}</h2>
      <div className="flex overflow-y-hidden overflow-x-scroll p-5 scrollbar-hide">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`object-contain w-full max-h-24 m-2 transform transition-transform duration-450 ${
              isLarge ? 'max-h-60 hover:scale-110' : 'hover:scale-108'
            }`}
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
