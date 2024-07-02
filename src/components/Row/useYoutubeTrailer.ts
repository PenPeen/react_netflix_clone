import { useState } from 'react';

import { Movie } from '@/type/movie';
import baseRequest from '@/utils/axios';
import { requests } from '@/utils/request';

export const useYoutubeTrailer = () => {
  const [trailerUrl, setTrailerUrl] = useState<string | null>('');

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      const moviePlayUrl = await baseRequest.get(
        requests.fetchMovieVideos(movie.id),
      );
      setTrailerUrl(moviePlayUrl.data.results[0]?.key);
    }
  };

  return {
    trailerUrl,
    handleClick,
  };
};
