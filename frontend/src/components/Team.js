import React from 'react';
const Team = () => {
  return (
      <div className='intro'>
        <div class="py-5 team4">
          <div class="container">
            <div class="row justify-content-center mb-4">
              <div class="col-md-7 text-center">
                <h1 class="mb-3"> Our Team</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 mb-4">
                <div class="row">
                  <div class="col-md-12">
                    <img src={require('./team-img/same_img.jpg')} alt="mouheb" class="img-fluid rounded-circle" />
                  </div>
                  <div class="col-md-12 text-center">
                    <div class="pt-2">
                      <h2 class="mt-4 font-weight-medium mb-0">Mouheb</h2>
                      <h5 class="subtitle mb-3">CEO & FOUNDER</h5>
                      <p>“Creativity <br/> is intelligence <br/> having fun.”</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="row">
                  <div class="col-md-12">
                    <img src={require('./team-img/same_img.jpg')} alt="louay" class="img-fluid rounded-circle" />
                  </div>
                  <div class="col-md-12 text-center">
                    <div class="pt-2">
                      <h2 class="mt-4 font-weight-medium mb-0">Louay</h2>
                      <h5 class="subtitle mb-3">CO-FOUNDER</h5>
                      <p>“Curiosity about life in all of its aspects, I think, is still the secret of great creative people.”</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="row">
                  <div class="col-md-12">
                    <img src={require('./team-img/same_img.jpg')} alt="ahmed" class="img-fluid rounded-circle" />
                  </div>
                  <div class="col-md-12 text-center">
                    <div class="pt-2">
                      <h2 class="mt-4 font-weight-medium mb-0">Ahmed</h2>
                      <h5 class="subtitle mb-3">GRAPHIC DESIGNER</h5>
                      <p>“Creativity involves breaking out of established patterns in order to look at things in a different way.”</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Team