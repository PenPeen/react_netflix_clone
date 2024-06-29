import { FC } from 'react';

import RowPresentation from './presentation';

import { useFetchMovies } from '@/hooks/useFetchMovies';

type Props = {
  title: string;
  fetchUrl: string;
  isLarge?: boolean;
};

const RowContainer: FC<Props> = ({ title, fetchUrl, isLarge }) => {
  return (
    <RowPresentation
      title={title}
      isLarge={isLarge}
      movies={useFetchMovies(fetchUrl)}
    />
  );
};

export { RowContainer as Row };
