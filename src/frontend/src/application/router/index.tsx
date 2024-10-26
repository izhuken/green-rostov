import '@/assets/styles/base.css';
import { PageLayout } from '@/components/page-layout';
import { AdminEvents } from '@/pages/admin/admin-events';
import { EcoPoints } from '@/pages/admin/admin-point';
import { AdminStat } from '@/pages/admin/admin-statistic';
import { AdminUsers } from '@/pages/admin/admin-users';

import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <PageLayout>
      <Routes>
        <Route key={'events'} element={<AdminEvents />} path='/admin/events' />
        <Route key={'ecoPoint'} element={<EcoPoints />} path='/admin/points' />
        <Route key={'users'} element={<AdminUsers />} path='/admin/users' />
        <Route key={'statistic'} element={<AdminStat />} path='/admin/stat' />
      </Routes>
    </PageLayout>
  );
};
