import { StatStyles } from '@/assets';
import { Header } from '@/components/admin/header';
import React from 'react';

interface AdminStatProps {}

export const AdminStat: React.FC<AdminStatProps> = () => {
  return (
    <>
      <div className={StatStyles.conteiner}>
        <div className={StatStyles.content}>
          <Header title='Статистика' />
        </div>
      </div>
    </>
  );
};
