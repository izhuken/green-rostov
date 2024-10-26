import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  Checkbox,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ModalUser } from './modal/createUserModal';

interface TableUserProps {}

export const TableUser: React.FC<TableUserProps> = () => {
  const [selection] = useState<string[]>([]);
  // const hasSelection = selection.length > 0;
  // const indeterminate = hasSelection && selection.length < items.length;
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const rows = items.map((item) => (
    <Tr
      display='flex'
      flexDirection='row'
      key={item.name}
      data-selected={selection.includes(item.name) ? '' : undefined}
    >
      <Td alignItems='center' display='flex' w={20}>
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
          border={'0px solid black'}
          w={5}
          h={5}
        />
      </Td>
      <Td alignItems='center' display='flex' w={110}>
        {item.name}
      </Td>
      <Td alignItems='center' display='flex' w={40}>
        {item.email}
      </Td>
      <Td alignItems='center' display='flex' w={40}>
        {item.rating}
      </Td>
      <Td alignItems='center' display='flex' w={40}>
        {item.isBlocked}
      </Td>
      <Td alignItems='center' display='flex' w={40}>
        {item.isAdmin}
      </Td>
      <Td alignItems='center' display='flex' w={40}>
        {item.tel}
      </Td>
    </Tr>
  ));
  return (
    <>
      <TableContainer
        display='flex'
        flexDirection='column'
        h={676}
        marginTop={30}
      >
        <Table display='flex' flexDirection='column' justifyContent='center'>
          <Thead>
            <Tr>
              <Th>
                <Checkbox
                  isChecked={allChecked}
                  isIndeterminate={isIndeterminate}
                  onChange={(e) =>
                    setCheckedItems([e.target.checked, e.target.checked])
                  }
                  border={'0px solid black'}
                  w={5}
                  h={5}
                />
              </Th>
              <Th w={110}>Имя</Th>
              <Th w={40}>Email</Th>
              <Th w={40}>Рейтинг</Th>
              <Th w={40}>Заблокирован?</Th>
              <Th w={40}>Админ?</Th>
              <Th w={40}>Телефон</Th>
              <Th>
                <Button onClick={onOpen}>
                  <AddIcon />
                </Button>
              </Th>
            </Tr>
          </Thead>
          <Tbody>{rows}</Tbody>
        </Table>
      </TableContainer>
      <ModalUser onClose={onClose} isOpen={isOpen} />
      {/* 
      <ActionBarRoot open={hasSelection}>
        <ActionBarContent>
          <ActionBarSelectionTrigger>
            {selection.length} selected
          </ActionBarSelectionTrigger>
          <ActionBarSeparator />
          <Button variant='outline' size='sm'>
            Delete <Kbd>⌫</Kbd>
          </Button>
          <Button variant='outline' size='sm'>
            Share <Kbd>T</Kbd>
          </Button>
        </ActionBarContent>
      </ActionBarRoot> */}
    </>
  );
};

const items = [
  {
    id: 1,
    name: 'Laptop',
    email: 'Electronics',
    rating: 999.99,
    isBlocked: '04.07.2025',
    isAdmin: '2 days ago',
    tel: '89185250001',
  },
  {
    id: 2,
    name: 'Laptop',
    email: 'Electronics',
    rating: 999.99,
    isBlocked: '04.07.2025',
    isAdmin: '2 days ago',
    tel: '89185250001',
  },
  {
    id: 3,
    name: 'Laptop',
    email: 'Electronics',
    rating: 999.99,
    isBlocked: '04.07.2025',
    isAdmin: '2 days ago',
    tel: '89185250001',
  },
  {
    id: 4,
    name: 'Laptop',
    email: 'Electronics',
    rating: 999.99,
    isBlocked: '04.07.2025',
    isAdmin: '2 days ago',
    tel: '89185250001',
  },
  {
    id: 5,
    name: 'Laptop',
    email: 'Electronics',
    rating: 999.99,
    isBlocked: '04.07.2025',
    isAdmin: '2 days ago',
    tel: '89185250001',
  },
];
