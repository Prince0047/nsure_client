import React from 'react';
import '../assets/styles/home.scss';
import '../assets/styles/style.css';
import '../assets/styles/bootstrap.css';
// import '../assets/styles/font-awesome.min.css';
import '../assets/styles/responsive.css';

import s1 from '../assets/images/s1.png';
import s2 from '../assets/images/s2.png';
import s3 from '../assets/images/s3.png';
import s4 from '../assets/images/s4.png';

import about_img from '../assets/images/about-img.jpg';
import about_img2 from '../assets/images/about-img2.jpg';
import about_bg from '../assets/images/about-bg.jpg';

import b1 from '../assets/images/b1.jpg';
import b2 from '../assets/images/b2.jpg';
import b3 from '../assets/images/b3.jpg';
import hero_bg from '../assets/images/hero-bg.jpg';
import client from '../assets/images/client.jpg';

function Home() {
  return (
    <div>
      <div className='hero_bg_box'>
        <img src={hero_bg} alt='' />
      </div>
      <div>
        {/* service section */}
        <section className='service_section layout_padding'>
          <div className='service_container'>
            <div className='container '>
              <div className='heading_container heading_center'>
                <h2>Our Services</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                </p>
              </div>
              <div className='row'>
                <div className='col-md-6 col-lg-3 '>
                  <div className='box '>
                    <div className='img-box'>
                      <img src={s1} alt='' />
                    </div>
                    <div className='detail-box'>
                      <h5>Home Insurance</h5>
                      <p>
                        fact that a reader will be distracted by the readable
                        looking at its layout.
                      </p>
                      <a href>Read More</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 col-lg-3 '>
                  <div className='box '>
                    <div className='img-box'>
                      <img src={s2} alt='' />
                    </div>
                    <div className='detail-box'>
                      <h5>Health Insurance</h5>
                      <p>
                        fact that a reader will be distracted by the readable
                        looking at its layout.
                      </p>
                      <a href>Read More</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 col-lg-3 '>
                  <div className='box '>
                    <div className='img-box'>
                      <img src={s3} alt='' />
                    </div>
                    <div className='detail-box'>
                      <h5>Car Insurance</h5>
                      <p>
                        fact that a reader will be distracted by the readable
                        looking at its layout.
                      </p>
                      <a href>Read More</a>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 col-lg-3 '>
                  <div className='box '>
                    <div className='img-box'>
                      <img src={s4} alt='' />
                    </div>
                    <div className='detail-box'>
                      <h5>Life Insurance</h5>
                      <p>
                        fact that a reader will be distracted by the readable
                        looking at its layout.
                      </p>
                      <a href>Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='btn-box'>
                <a href>View All</a>
              </div>
            </div>
          </div>
        </section>
        {/* end service section */}
        {/* about section */}
        <section className='about_section about_section1 layout_padding-bottom'>
          <div className='container  '>
            <div className='row'>
              <div className='col-lg-6 '>
                <div className='img-box'>
                  <img src={about_img} alt='' />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='detail-box'>
                  <div className='heading_container'>
                    <h2>
                      About <span>Us</span>
                    </h2>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All
                  </p>
                  <a href>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end about section */}
        {/* about section */}
        <section className='about_section about_section2 layout_padding-bottom'>
          <div className='container  '>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='detail-box'>
                  <div className='heading_container'>
                    <h2>
                      Best insurance for <br />
                      your family
                    </h2>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All
                  </p>
                  <a href>Read More</a>
                </div>
              </div>
              <div className='col-lg-6 '>
                <div className='img-box'>
                  <img src={about_img2} alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end about section */}
        {/* contact section */}
        <section className='contact_section '>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-6 px-0'>
                <div className='map_container'>
                  <div className='map'>
                    <div id='googleMap' />
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-5 mx-auto'>
                <div className='form_container mb_mobile_45 pr-xl-4'>
                  <div className='heading_container heading_center '>
                    <h2 className>Get In Touch</h2>
                  </div>
                  <form action='#' className='contact_form'>
                    <input
                      type='text'
                      name='your_name'
                      className='form-control'
                      id='inputName'
                      placeholder='Your Name'
                    />
                    <input
                      type='text'
                      name='phone_number'
                      className='form-control'
                      id='inputNumber'
                      placeholder='Mobile Number'
                    />
                    <input
                      type='email'
                      name='email_address'
                      className='form-control'
                      id='inputMail'
                      placeholder='Email'
                    />
                    <input
                      type='text'
                      name='your_message'
                      className='form-control'
                      id='inputMessage'
                      placeholder='Message'
                    />
                    <div className='btn-box btn-center'>
                      <button type='submit' className='submit_btn'>
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact section */}
        {/* client section */}
        <section className='client_section layout_padding'>
          <div className='container '>
            <div className='heading_container heading_center'>
              <h2>What Says Our Client</h2>
              <hr />
            </div>
            <div
              id='carouselExample2Controls'
              className='carousel slide'
              data-ride='carousel'
            >
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-9 mx-auto'>
                      <div className='client_container '>
                        <div className='detail-box'>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Illo voluptatibus, et cum alias natus eligendi
                            saepe facilis accusantium quae doloremque atque ea
                            impedit sunt dolorum ipsa quo error perferendis
                            perspiciatis. Fugit pariatur natus deleniti commodi
                            repellendus sint, voluptatum obcaecati nulla
                            voluptas quisquam cum architecto, aut placeat iusto,
                            doloribus hic consectetur! Illo voluptates quas
                            beatae.
                            <span>
                              <i
                                className='fa fa-quote-right'
                                aria-hidden='true'
                              />
                            </span>
                          </p>
                        </div>
                        <div className='client_id'>
                          <div className='img-box'>
                            <img src={client} alt='' />
                          </div>
                          <div className='client_name'>
                            <h5>Jone Mark</h5>
                            <h6>Client</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-9 mx-auto'>
                      <div className='client_container '>
                        <div className='detail-box'>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Illo voluptatibus, et cum alias natus eligendi
                            saepe facilis accusantium quae doloremque atque ea
                            impedit sunt dolorum ipsa quo error perferendis
                            perspiciatis. Fugit pariatur natus deleniti commodi
                            repellendus sint, voluptatum obcaecati nulla
                            voluptas quisquam cum architecto, aut placeat iusto,
                            doloribus hic consectetur! Illo voluptates quas
                            beatae.
                            <span>
                              <i
                                className='fa fa-quote-right'
                                aria-hidden='true'
                              />
                            </span>
                          </p>
                        </div>
                        <div className='client_id'>
                          <div className='img-box'>
                            <img src={client} alt='' />
                          </div>
                          <div className='client_name'>
                            <h5>Jone Mark</h5>
                            <h6>Client</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-9 mx-auto'>
                      <div className='client_container '>
                        <div className='detail-box'>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Illo voluptatibus, et cum alias natus eligendi
                            saepe facilis accusantium quae doloremque atque ea
                            impedit sunt dolorum ipsa quo error perferendis
                            perspiciatis. Fugit pariatur natus deleniti commodi
                            repellendus sint, voluptatum obcaecati nulla
                            voluptas quisquam cum architecto, aut placeat iusto,
                            doloribus hic consectetur! Illo voluptates quas
                            beatae.
                            <span>
                              <i
                                className='fa fa-quote-right'
                                aria-hidden='true'
                              />
                            </span>
                          </p>
                        </div>
                        <div className='client_id'>
                          <div className='img-box'>
                            <img src={client} alt='' />
                          </div>
                          <div className='client_name'>
                            <h5>Jone Mark</h5>
                            <h6>Client</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel_btn-box'>
                <a
                  className='carousel-control-prev'
                  href='#carouselExample2Controls'
                  role='button'
                  data-slide='prev'
                >
                  <span>
                    <i className='fa fa-arrow-left' aria-hidden='true' />
                  </span>
                  <span className='sr-only'>Previous</span>
                </a>
                <a
                  className='carousel-control-next'
                  href='#carouselExample2Controls'
                  role='button'
                  data-slide='next'
                >
                  <span>
                    <i className='fa fa-arrow-right' aria-hidden='true' />
                  </span>
                  <span className='sr-only'>Next</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* end client section */}
        {/* news section */}
        <section className='news_section layout_padding-bottom'>
          <div className='container'>
            <div className='heading_container heading_center'>
              <h2>Latest news</h2>
            </div>
            <div className='row'>
              <div className='col-md-6 col-lg-4 mx-auto'>
                <div className='box'>
                  <div className='img-box'>
                    <img src={b1} alt='' />
                  </div>
                  <div className='detail-box'>
                    <h5>Reprehenderit tenetur eos</h5>
                    <p>
                      alteration in some form, by injected humour, or randomised
                      words which don't look even slightly believable.
                    </p>
                    <div className='news_info'>
                      <h6 className='news_date'>
                        <i className='fa fa-calendar' aria-hidden='true' /> 28
                        Sep 2020
                      </h6>
                      <h6 className='news_poster'>
                        <i className='fa fa-user' aria-hidden='true' /> Andrew
                        James
                      </h6>
                    </div>
                    <a href>Read More</a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-4 mx-auto'>
                <div className='box'>
                  <div className='img-box'>
                    <img src={b2} alt='' />
                  </div>
                  <div className='detail-box'>
                    <h5>Numquam suscipit maxime</h5>
                    <p>
                      alteration in some form, by injected humour, or randomised
                      words which don't look even slightly believable.
                    </p>
                    <div className='news_info'>
                      <h6 className='news_date'>
                        <i className='fa fa-calendar' aria-hidden='true' /> 29
                        Sep 2020
                      </h6>
                      <h6 className='news_poster'>
                        <i className='fa fa-user' aria-hidden='true' /> Andrew
                        James
                      </h6>
                    </div>
                    <a href>Read More</a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-4 mx-auto'>
                <div className='box'>
                  <div className='img-box'>
                    <img src={b3} alt='' />
                  </div>
                  <div className='detail-box'>
                    <h5>Pariatur deserunt tempora</h5>
                    <p>
                      alteration in some form, by injected humour, or randomised
                      words which don't look even slightly believable.
                    </p>
                    <div className='news_info'>
                      <h6 className='news_date'>
                        <i className='fa fa-calendar' aria-hidden='true' /> 30
                        Sep 2020
                      </h6>
                      <h6 className='news_poster'>
                        <i className='fa fa-user' aria-hidden='true' /> Andrew
                        James
                      </h6>
                    </div>
                    <a href>Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='btn-box'>
              <a href>View More</a>
            </div>
          </div>
        </section>
        {/* end news section */}
        {/* info section */}
        <section className='info_section '>
          <div className='container'>
            <div className='info_top '>
              <div className='row '>
                <div className='col-md-7 col-lg-4'>
                  <div className='info_detail'>
                    <a href='index.html'>
                      <h4>Insudor</h4>
                    </a>
                    <p>
                      Soluta odit exercitationem rerum aperiam eos consectetur
                      impedit delectus qui reiciendis, distinctio, asperiores
                      fuga labore Magni natus.
                    </p>
                    <div className='social_box'>
                      <a href>
                        <i className='fa fa-facebook' aria-hidden='true' />
                      </a>
                      <a href>
                        <i className='fa fa-twitter' aria-hidden='true' />
                      </a>
                      <a href>
                        <i className='fa fa-linkedin' aria-hidden='true' />
                      </a>
                      <a href>
                        <i className='fa fa-youtube-play' aria-hidden='true' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-md-5 col-lg-4 col-xl-3 mx-auto'>
                  <h4>Contact us</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                  <div className='contact_nav'>
                    <a href>
                      <i className='fa fa-map-marker' aria-hidden='true' />
                      <span>Location</span>
                    </a>
                    <a href>
                      <i className='fa fa-phone' aria-hidden='true' />
                      <span>Call : +01 123455678990</span>
                    </a>
                    <a href>
                      <i className='fa fa-envelope' aria-hidden='true' />
                      <span>Email : demo@gmail.com</span>
                    </a>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='info_form'>
                    <h4>SIGN UP TO OUR NEWSLETTER</h4>
                    <form action>
                      <input type='text' placeholder='Enter Your Email' />
                      <button type='submit'>Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
