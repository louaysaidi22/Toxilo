import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
      <div className='intro'>
          <div className='container'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  Think Creative, Think Toxilo
                </h1>
                <p>
                  “We are ready to serve you otherwise - You stay connected with creativity”
                </p>

                <NavLink className="btn btn-custom" to="/contactus">
                    Contact Us
                </NavLink>
            </div>
        </div>
      </div>
  )
}

export default Home