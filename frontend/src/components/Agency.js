import React from 'react';
import { NavLink } from 'react-router-dom';

const Agency = () => {
  return (
    <div className='intro'>
    <div className='container'>
        <div className='col-md-8 col-md-offset-2 intro-text'>
          <h1>
            Toxilo
          </h1>
          <h2>
          A PARTNER NOT A SIMPLE AGENCY
          </h2>

          <NavLink className="btn btn-custom" to="/contact">
              Contact Us
          </NavLink>
      </div>
  </div>
</div>
)

}

export default Agency