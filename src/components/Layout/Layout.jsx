// import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
// import { AppBar } from 'components/AppBar/AppBar';
// import { Wrapper } from './Layout.styled';
// import { Loader } from '../Loader/Loader';

// // Компонент Layout відповідає за загальну структуру сторінки
// export const Layout = () => {
//   return (
//     <Wrapper>
//       <AppBar />{' '}
//       {/*Виводимо компонент AppBar, який містить навігаційну панель */}
//       <Suspense fallback={<Loader />}>
//         <Outlet />
//         {/* Виводимо дочірній компонент Outlet, який буде містити відповідний компонент в залежності від поточного шляху */}
//       </Suspense>
//     </Wrapper>
//   );
// };

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Footer, PageContainer } from './Layout.styles';
import Navigation from 'components/navigation/Navigation';

// import { Dna } from 'react-loader-spinner';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>

      <PageContainer>
        <Suspense fallback={null}>
          {/* <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        /> */}
          <Outlet />
        </Suspense>
      </PageContainer>

      <Footer>
        <p>
          Created by
          <a href="https://github.com/hellene-mary"> &copy; hellene-mary</a> as
          homework for courses GoIt
        </p>
      </Footer>
    </Container>
  );
};

export default Layout;
