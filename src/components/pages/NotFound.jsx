import React from 'react';
import '../../styles/Pages/NotFound.css';
// import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="page_404">
      <div className="container_404">
        <div className="four_zero_four_bg"></div>

        <div className="content_box_404">
          <h1>404</h1>
          <h3>Looks like you're lost</h3>
          <p>The page you are looking for is not available!</p>
          {/* <a href="/" className="link_404">Go to Home</a> */}
          {/* <Link to = {'/'} className='links'>Home</Link> */}
        </div>
      </div>
    </section>
  );
};

export default NotFound;