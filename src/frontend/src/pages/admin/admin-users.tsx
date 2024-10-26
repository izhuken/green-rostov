import { UsersStyles } from '@/assets';
import { Header } from '@/components/admin/header';
import { TableUser } from '@/components/admin/table-user';
import React from 'react';

interface AdminUsersProps {}

export const AdminUsers: React.FC<AdminUsersProps> = () => {
  console.log('events');
  return (
    <>
      <div className={UsersStyles.conteiner}>
        <div className={UsersStyles.content}>
          <Header title='Пользователи' />
          <TableUser />
        </div>
      </div>
    </>
  );
};
