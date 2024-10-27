import { HeaderStyles } from '@/assets';

import React from 'react';

import { Box } from '@chakra-ui/react';
import out from '../../../public/out.svg';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <Box w={'full'} className={HeaderStyles.header} pt={10}>
        <h1 className={HeaderStyles.title}>{props.title}</h1>
        <img src={out}></img>
      </Box>
    </>
  );
};
