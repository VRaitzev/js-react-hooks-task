import React, { useContext } from 'react';

import ThemeContext from './contexts';

const Profile = () => {
  // BEGIN (write your solution here)
  const value = useContext(ThemeContext);
  const className = value.theme.className
  // END

  return (
    <article className={className}>
      Текст для вкладки Profile
    </article>
  );
};

export default Profile;
