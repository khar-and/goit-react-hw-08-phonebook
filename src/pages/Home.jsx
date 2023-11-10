// import { Wrapper, Title } from './Home.styled';

// // Компонент Home відповідає за відображення домашньої сторінки
// export default function Home() {
//   return (
//     <Wrapper>
//       <Title>Welcome to Phonebook!</Title>{' '}
//       {/* Відображення заголовка на домашній сторінці */}
//     </Wrapper>
//   );
// }

import { SectionHome } from './Home.styled';

const Home = () => {
  return (
    <SectionHome>
      <h1>
        Welcome to <span>Phonebook</span>!
      </h1>
      <p>Create your own personal book of contacts</p>
    </SectionHome>
  );
};

export default Home;
