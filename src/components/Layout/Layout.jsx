import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation.jsx';
import { Suspense } from 'react';
import { Header, Main, Footer, P } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      {' '}
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>
        <P>Moviethek App</P>
      </Footer>
    </>
  );
};
