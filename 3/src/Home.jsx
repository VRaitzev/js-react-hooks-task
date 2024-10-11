import React, { useContext } from 'react';

import ThemeContext from './contexts';

const Home = () => {
  // BEGIN (write your solution here)
  const value = useContext(ThemeContext);
  const className = value.theme.className
  // END

  return (
    <article className={className}>
      Текст для вкладки Home
    </article>
  );
};

export default Home;
