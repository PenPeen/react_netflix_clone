import { FC } from 'react';

import HeaderPresentation from './presentation';

import { useHeader } from '@/hooks/useHeader';

const HeaderContainer: FC = () => {
  const { show: isShow } = useHeader();

  return <>{isShow && <HeaderPresentation />}</>;
};

export { HeaderContainer as Header };
