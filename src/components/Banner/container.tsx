import { FC } from 'react';

import BannerPresentation from './presentation';

import { useBanner } from '@/hooks/useBanner';

const BannerContainer: FC = () => {
  const { movie } = useBanner();

  return <>{movie && <BannerPresentation movie={movie} />}</>;
};

export { BannerContainer as Banner };
