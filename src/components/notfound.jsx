import React from 'react';
import Errorpicture from "../assets/404.svg";
import '../index.scss';

const NotFound = () => {
  return (
    <div className='container'>
      <div className="px-4 py-5 my-5 text-center">
        <img src={Errorpicture} alt="404" style={{ width: '20%', height: '20%' }} />
        <h1 className="display-5 fw-bold text-body-emphasis py-5">404 - Page not found</h1>
        <div className="col-lg-6 mx-auto">
          <p className='lead text-center'>Oops! The page you're looking for either </p>
          <ul className='lead text-start col-lg-8 mx-auto'>
            <li>doesn't exist </li>
            <li>is undergoing maintenance at the moment</li>
            <li>is having a problem!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
