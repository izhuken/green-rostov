import { userApi } from '@/assets/config/api';
import { PaginatedResponse, User } from '@/entities';
import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ModalUser } from './modal/createUserModal';
import { TableRow } from './row';

interface UsersTableProps {}

export const UsersTable: React.FC<UsersTableProps> = () => {
  const { data } = useQuery({
    queryKey: ['user-list'],
    queryFn: async () =>
      await axios.get<PaginatedResponse<User[]>>(`${userApi}/get_all`),
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <TableContainer mt={100}>
        <Table position={'relative'}>
          <Thead>
            <Tr>
              <Th>Имя</Th>
              <Th>E-mail</Th>
              <Th>Телефон</Th>
              <Th>Рейтинг</Th>
              <Th>Админ?</Th>
              <Th>Создан</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.data &&
              data.data.data.map((u) => <TableRow key={u.id} user={u} />)}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th colSpan={6}>
                <Button onClick={onOpen} w={'full'}>
                  +
                </Button>
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <ModalUser onClose={onClose} isOpen={isOpen} />
    </>
  );
};
