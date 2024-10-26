import { AdminStyles } from '@/assets';
import clsx from 'clsx';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../../public/logo.svg';

interface AdminNavProps {}

export const AdminNav: React.FC<AdminNavProps> = () => {
  return (
    <>
      <div className={AdminStyles.container}>
        <div className={AdminStyles.content}>
          <div className={AdminStyles.logo}>
            <img src={logo}></img>
          </div>
          <div className={AdminStyles.buttons}>
            <NavLink
              className={({ isActive }) =>
                clsx(AdminStyles.navLink, isActive && AdminStyles.active)
              }
              to='/admin/events'
            >
              Ивенты
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx(AdminStyles.navLink, isActive && AdminStyles.active)
              }
              to='/admin/points'
            >
              Экол точки
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx(AdminStyles.navLink, isActive && AdminStyles.active)
              }
              to='/admin/users'
            >
              Пользователи
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                clsx(AdminStyles.navLink, isActive && AdminStyles.active)
              }
              to='/admin/stat'
            >
              Статистика
            </NavLink>
          </div>
        </div>
      </div>
      <div className='right'>
        <Outlet />
      </div>
    </>
  );
};
