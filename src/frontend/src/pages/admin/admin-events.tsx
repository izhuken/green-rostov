import { EventsStyles } from '@/assets';
import { Header } from '@/components/admin/header';
import { TableEvents } from '@/components/admin/table';
import React from 'react';

interface AdminEventsProps {}

export const AdminEvents: React.FC<AdminEventsProps> = () => {
  console.log('events');

  return (
    <>
      <div className={EventsStyles.conteiner}>
        <div className={EventsStyles.content}>
          <Header title='Ивенты' />
          <TableEvents />
        </div>
      </div>
    </>
  );
};
