import { UsersStyles } from '@/assets';
import { Header } from '@/components/admin/header';
import { UsersTable } from '@/components/user-table/table';
import React from 'react';

interface AdminUsersProps {}

export const AdminUsers: React.FC<AdminUsersProps> = () => {
  return (
    <>
      <div className={UsersStyles.conteiner}>
        <div className={UsersStyles.content}>
          <Header title='Пользователи' />
          <UsersTable />
        </div>
      </div>
    </>
  );
};
