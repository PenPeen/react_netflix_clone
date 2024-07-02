import { FC } from 'react';

import RowPresentation from './presentation';
import { useYoutubeTrailer } from './useYoutubeTrailer';

import { useFetchMovies } from '@/hooks/useFetchMovies';

type Props = {
  title: string;
  fetchUrl: string;
  isLarge?: boolean;
};

const RowContainer: FC<Props> = ({ title, fetchUrl, isLarge }) => {
  const { trailerUrl, handleClick } = useYoutubeTrailer();

  return (
    <RowPresentation
      title={title}
      isLarge={isLarge}
      movies={useFetchMovies(fetchUrl)}
      trailerUrl={trailerUrl}
      handleClick={handleClick}
    />
  );
};

export { RowContainer as Row };
