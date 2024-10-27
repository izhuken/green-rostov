import { eventApi } from '@/assets/config/api';
import { Event, PaginatedResponse } from '@/entities';
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
import { ModalEvent } from './modal/createEventModal';
import { TableRow } from './row';

interface TableEventsProps {}

export const TableEvents: React.FC<TableEventsProps> = () => {
  const { data } = useQuery({
    queryKey: ['event-list'],
    queryFn: async () =>
      await axios.get<PaginatedResponse<Event[]>>(`${eventApi}/event/get_all`),
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <TableContainer mt={100}>
        <Table position={'relative'}>
          <Thead>
            <Tr>
              <Th>Наименование</Th>
              <Th>Описание</Th>
              <Th>Рейтинг</Th>
              <Th>Создан</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.data &&
              data.data.data.map((e) => <TableRow key={e.id} event={e} />)}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th colSpan={5}>
                <Button onClick={onOpen} w={'full'}>
                  +
                </Button>
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <ModalEvent onClose={onClose} isOpen={isOpen} />
    </>
  );
};
