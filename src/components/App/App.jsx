import { Suspense, lazy } from 'react';
import Layout from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
// import ContactsPage from '../../pages/ContactsPage/ContactsPage';
// import HomePage from '../../pages/HomePage/HomePage';
// import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
// import LoginPage from '../../pages/LoginPage/LoginPage';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage'),
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage'),
);

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
