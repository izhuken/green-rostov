import '@/assets/styles/base.css';
import {
  Homepage,
  LogOut,
  NotFoundPage,
  RedirectNotFound,
  SignIn,
  SignUp,
} from '@/pages';
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Routes>
      <Route key={'homepage'} element={<Homepage />} path='/' />
      <Route
        key={'not found page'}
        element={<NotFoundPage />}
        path='/not-found'
      />

      <Route key={'logout'} element={<LogOut />} path='/logout' />
      <Route key={'sign in'} element={<SignIn />} path='/sign-in' />
      <Route key={'sign up'} element={<SignUp />} path='/sign-up' />

      <Route
        key={'redirect for not found'}
        element={<RedirectNotFound />}
        path='/*'
      />
    </Routes>
  );
};
