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
import { ModalEvent } from './modal/createEventModal';

interface TableEventsProps {}

export const TableEvents: React.FC<TableEventsProps> = () => {
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
      key={item.title}
      data-selected={selection.includes(item.title) ? '' : undefined}
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
        {item.id}
      </Td>
      <Td alignItems='center' display='flex' w={40}>
        {item.title}
      </Td>
      <Td alignItems='center' display='flex' w={40}>
        {item.description}
      </Td>
      <Td alignItems='center' display='flex' w={40}>
        {item.rating}
      </Td>
      <Td alignItems='center' display='flex' w={40}>
        {item.created}
      </Td>
      <Td alignItems='center' display='flex' w={40}>
        {item.update}
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
              <Th w={110}>Creator ID</Th>
              <Th w={40}>Заголовок</Th>
              <Th w={40}>Описание</Th>
              <Th w={40}>Рейтинг</Th>
              <Th w={40}>Создан</Th>
              <Th w={40}>Обновлен</Th>
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
      <ModalEvent onClose={onClose} isOpen={isOpen} />
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
    title: 'Laptop',
    description: 'Electronics',
    rating: 999.99,
    created: '04.07.2025',
    update: '2 days ago',
  },
  {
    id: 2,
    title: 'Laptop',
    description: 'Electronics',
    rating: 999.99,
    created: '04.07.2025',
    update: '2 days ago',
  },
  {
    id: 3,
    title: 'Laptop',
    description: 'Electronics',
    rating: 999.99,
    created: '04.07.2025',
    update: '2 days ago',
  },
  {
    id: 4,
    title: 'Laptop',
    description: 'Electronics',
    rating: 999.99,
    created: '04.07.2025',
    update: '2 days ago',
  },
  {
    id: 5,
    title: 'Laptop',
    description: 'Electronics',
    rating: 999.99,
    created: '04.07.2025',
    update: '2 days ago',
  },
];
