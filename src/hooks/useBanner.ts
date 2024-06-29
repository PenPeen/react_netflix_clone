import { useEffect, useState } from 'react';

import { Movie } from '@/type/movie';
import baseRequest from '@/utils/axios';
import { requests } from '@/utils/request';

/**
 * バナー用の映画データをランダムに取得。テキストを整形するユーティリティ関数を提供する。
 * @returns {object} バナー映画データとテキスト整形関数を含むオブジェクト
 */
export const useBanner = () => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    async function fetchData() {
      const request = await baseRequest.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      );
    }

    fetchData();
  }, []);

  return {
    movie,
  };
};
