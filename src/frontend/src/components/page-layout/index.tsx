import { AdminNav } from '@/pages/admin/admin-nav';
import { Grid, GridItem } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <Grid w={'100dvw'} h={'100dvh'} templateColumns={'20% 1fr'}>
      <GridItem>
        <AdminNav />
      </GridItem>
      <GridItem>{children}</GridItem>
    </Grid>
  );
};
