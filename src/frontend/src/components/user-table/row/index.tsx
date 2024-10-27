import { User } from '@/entities';
import { Td, Tr } from '@chakra-ui/react';
import React from 'react';

interface TableRowProps {
  user: User;
}

export const TableRow: React.FC<TableRowProps> = ({ user }) => {
  return (
    <Tr>
      <Td>{user.username}</Td>
      <Td>{user.email}</Td>
      <Td>{user.phone}</Td>
      <Td>{user.rating}</Td>
      <Td>{user.is_admin ? 'Да' : 'Нет'}</Td>
      <Td>{new Date(user.create_time).toLocaleString('ru')}</Td>
    </Tr>
  );
};
