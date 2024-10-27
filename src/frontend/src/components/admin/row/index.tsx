import { Event } from '@/entities';
import { Td, Tr } from '@chakra-ui/react';
import React from 'react';

interface TableRowProps {
  event: Event;
}

export const TableRow: React.FC<TableRowProps> = ({ event }) => {
  return (
    <Tr>
      <Td>{event.title}</Td>
      <Td>{event.description}</Td>
      <Td>{event.rating}</Td>

      <Td>{new Date(event.create_time).toLocaleString('ru')}</Td>
    </Tr>
  );
};
