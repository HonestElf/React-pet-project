import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppPaths } from '../../router/routes';

import style from './ErrorPage.module.scss';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const headBackClickHandle = () => {
    navigate(AppPaths.home);
  };
  return (
    <div className={style.NotFoundPageWrapper}>
      <h1>Oops!</h1>
      <p>Page you are looking for doesnt exist</p>
      <button className={style.ErrorPageButton} onClick={headBackClickHandle}>
        Head home
      </button>
    </div>
  );
};

export default NotFoundPage;
