import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Td: {
      base: {
        display: 'flex',
        alignItems: 'center',
      },
      variants: {
        events: {
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
  },
});
