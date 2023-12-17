import './App.css';
import React from "react";
import  {Helmet} from "react-helmet";
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="App.css"/>
        <link
            href="https://fonts.googleapis.com/css?family=Kaushan+Script|Montserrat:300i,400,700&amp;subset=cyrillic-ext"
            rel="stylesheet"
        />
        <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossOrigin="anonymous"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        />
        <title>Mogo</title>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
        <script src="script/script.js"></script>
      </Helmet>
      <header className="header" id="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">MoGo</div>

            <nav className="nav" id="nav">
              {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
              <a className="nav__link" href="#" data-scroll="#about">About</a>
              {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
              <a className="nav__link" href="#" data-scroll="#services">Service</a>
              {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
              <a className="nav__link" href="#" data-scroll="#blog">Blog</a>
              {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
              <a className="nav__link" href="#" data-scroll="#works">Work</a>
              {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
              <a className="nav__link" href="#" data-scroll="#footer">Contact</a>
              {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
              <a className="nav__link" href="#"><i className="fas fa-shopping-cart"></i></a>
              {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
              <a className="nav__link" href="#"><i className="fas fa-search"></i></a>
            </nav>

            <button className="nav-toggle" id="nav_toggle" type="button">
              <span className="nav-toggle__item">Menu</span>
            </button>
          </div>
        </div>
      </header>
      <div className="page">
         {/*Intro */}
        <div className="intro" id="intro">
          <div className="container">
            <div className="intro__inner">
              <h2 className="intro__suptitle">Creative Template</h2>
              <h1 className="intro__title">Welcome to MoGo</h1>
              {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
              <a className="btn" href="#">Learn More</a>
            </div>
          </div>

          <div className="slider">
            <div className="container">
              <div className="slider__inner">
                <div className="slider__item active">
                  <span className="slider__num">01</span>
                  <span className="slider__text">Intro</span>
                </div>
                <div className="slider__item">
                  <span className="slider__num">02</span>
                  <span className="slider__text">Work</span>
                </div>
                <div className="slider__item">
                  <span className="slider__num">03</span>
                  <span className="slider__text">About</span>
                </div>
                <div className="slider__item">
                  <span className="slider__num">04</span>
                  <span className="slider__text">Contacts</span>
                </div>
              </div>
            </div>
          </div>

        </div> {/*.intro */}


        {/*About */}
        <section className="section" id="about">
          <div className="container">

            <div className="section__header">
              <h3 className="section__suptitle">What we do</h3>
              <h2 className="section__title">Story about us</h2>
              <div className="section__text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>

            <div className="card">
              <div className="card__item">
                <div className="card__inner">
                  <div className="card__img">
                    <img src="images/about/1.jpg" alt=""/>
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                      <a className="card__icon" href="#" target="_blank">
                        <i className="fas fa-user-friends"></i>
                      </a>
                  </div>
                  <div className="card__text">super team</div>
                </div>
              </div>

              <div className="card__item">
                <div className="card__inner">
                  <div className="card__img">
                    <img src="images/about/2.jpg" alt=""/>
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                      <a className="card__icon" href="#" target="_blank">
                        <i className="fas fa-user-friends"></i>
                      </a>
                  </div>
                  <div className="card__text">super team</div>
                </div>
              </div>

              <div className="card__item">
                <div className="card__inner">
                  <div className="card__img">
                    <img src="images/about/3.jpg" alt=""/>
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                      <a className="card__icon" href="#" target="_blank">
                        <i className="fas fa-user-friends"></i>
                      </a>
                  </div>
                  <div className="card__text">super team</div>
                </div>
              </div>
            </div>

          </div> {/*.container*/}
        </section>


        {/*Statistics*/}
        <div className="statistics">
          <div className="container">

            <div className="stat">
              <div className="stat__item">
                <div className="stat__count">42</div>
                <div className="stat__text">Web Design Projects</div>
              </div>
              <div className="stat__item">
                <div className="stat__count">123</div>
                <div className="stat__text">happy client</div>
              </div>
              <div className="stat__item">
                <div className="stat__count">15</div>
                <div className="stat__text">award winner</div>
              </div>
              <div className="stat__item">
                <div className="stat__count">99</div>
                <div className="stat__text">cup of coffee</div>
              </div>
              <div className="stat__item">
                <div className="stat__count">24</div>
                <div className="stat__text">members</div>
              </div>
            </div>

          </div>
        </div>


        {/*Services*/}
        <section className="section" id="services">
          <div className="container">

            <div className="section__header">
              <h3 className="section__suptitle">We work with</h3>
              <h2 className="section__title">Amazing Services</h2>
            </div>

            <div className="services">
              <div className="services__item  services__item--border">
                <img className="services__icon" src="images/services/photography.png" alt=""/>

                  <div className="services__title">Photography</div>
                  <div className="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
              </div>
              <div className="services__item  services__item--border">
                <img className="services__icon" src="images/services/webdesign.png" alt=""/>

                  <div className="services__title">Web Design</div>
                  <div className="services__text">Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..</div>
              </div>
              <div className="services__item  services__item--border">
                <img className="services__icon" src="images/services/creativity.png" alt=""/>

                  <div className="services__title">Creativity</div>
                  <div className="services__text">Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
              </div>
              <div className="services__item">
                <img className="services__icon" src="images/services/seo.png" alt=""/>

                  <div className="services__title">seo</div>
                  <div className="services__text">Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
              </div>
              <div className="services__item">
                <img className="services__icon" src="images/services/css-html.png" alt=""/>

                  <div className="services__title">Css/Html</div>
                  <div className="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
              </div>
              <div className="services__item">
                <img className="services__icon" src="images/services/digital.png" alt=""/>

                  <div className="services__title">digital</div>
                  <div className="services__text">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
              </div>
            </div>

          </div>{/*.container*/}
        </section>


         {/*Devices */}
        <section className="section  section--devices">
          <div className="container">

            <div className="section__header">
              <h3 className="section__suptitle">For all devices</h3>
              <h2 className="section__title">Unique design</h2>
            </div>

            <div className="devices">
              <img className="devices__item" src="./images/ipad.png" alt=""/>
                <img className="devices__item  devices__item--iphone" src="images/iphone.png" alt=""/>
            </div>

          </div>
        </section>


         {/*Wedo */}
        <section className="section">
          <div className="container">

            <div className="section__header">
              <h3 className="section__suptitle">Service</h3>
              <h2 className="section__title">what we do</h2>
              <div className="section__text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>

            <div className="wedo">
              <div className="wedo__item">
                <img className="wedo__img" src="images/wedo.jpg" alt=""/>
              </div>

              <div className="wedo__item">

                <div className="accordion">
                  <div className="accordion__item" data-collapse="#wedo_1">
                    <div className="accordion__header">
                      <img className="accordion__icon" src="images/service/photo.png" alt=""/>
                        <div className="accordion__title">Photography</div>
                    </div>
                    <div className="accordion__content" id="wedo_1">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>

                  <div className="accordion__item active" data-collapse="#wedo_2">
                    <div className="accordion__header">
                      <img className="accordion__icon" src="images/service/creativity.png" alt=""/>
                        <div className="accordion__title">Creativity</div>
                    </div>
                    <div className="accordion__content" id="wedo_2">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>

                  <div className="accordion__item" data-collapse="#wedo_3">
                    <div className="accordion__header">
                      <img className="accordion__icon" src="images/service/web design.png" alt=""/>
                        <div className="accordion__title">web design</div>
                    </div>
                    <div className="accordion__content" id="wedo_3">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>{/*.accordion */}

              </div>{/*.wedo__item */}
            </div>{/*.wedo */}

          </div>
        </section>


        {/* Reviews 1*/}
        <div className="section  section--gray">
          <div className="container">

            <div className="reviews">
              <div data-slider="">
                <div>
                  <div className="reviews__item">
                    <img className="reviews__photo" src="images/avatar2.png" alt=""/>
                      <div className="reviews__text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”</div>
                      <div className="reviews__author">Jon Doe</div>
                  </div>
                </div>

                <div>
                  <div className="reviews__item">
                    <img className="reviews__photo" src="images/avatar2.png" alt=""/>
                      <div className="reviews__text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”</div>
                      <div className="reviews__author">Jon Doe</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


         {/*Team */}
        <section className="section">
          <div className="container">

            <div className="section__header">
              <h3 className="section__suptitle">Who we are</h3>
              <h2 className="section__title">Meet our team</h2>
              <div className="section__text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>

            <div className="card">
              <div className="card__item">
                <div className="card__inner">
                  <div className="card__img">
                    <img src="images/team/1.jpg" alt=""/>
                  </div>
                  <div className="card__text">
                    <div className="social">
                      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                      <a className="social__item" href="#" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                      <a className="social__item" href="#" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                      <a className="social__item" href="#" target="_blank">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                      <a className="social__item" href="#" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card__info">
                  <div className="card__name">Matthew Dix</div>
                  <div className="card__prof">Graphic Design</div>
                </div>
              </div>{/*.card__item */}

              <div className="card__item">
                <div className="card__inner">
                  <div className="card__img">
                    <img src="images/team/2.jpg" alt=""/>
                  </div>
                  <div className="card__text">
                    <div className="social">
                      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                      <a className="social__item" href="#" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                      <a className="social__item" href="#" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                      <a className="social__item" href="#" target="_blank">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                      <a className="social__item" href="#" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card__info">
                  <div className="card__name">Christopher Campbell</div>
                  <div className="card__prof">Branding/UX design</div>
                </div>
              </div> {/*.card__item*/}

              <div className="card__item">
                <div className="card__inner">
                  <div className="card__img">
                    <img src="images/team/3.jpg" alt=""/>
                  </div>
                  <div className="card__text">
                    <div className="social">
                      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                      <a className="social__item" href="#" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                      <a className="social__item" href="#" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                      <a className="social__item" href="#" target="_blank">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                      <a className="social__item" href="#" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card__info">
                  <div className="card__name">Michael Fertig </div>
                  <div className="card__prof">Developer</div>
                </div>
              </div>{/*.card__item*/}

            </div>{/*.card */}

          </div>{/*.container*/}
        </section>


        {/* Logos */}
        <div className="section  section--gray">
          <div className="container">

            <div className="logos">
              <div className="logos__item">
                <img className="logos__img" src="images/logos/1.png" alt=""/>
              </div>
              <div className="logos__item">
                <img className="logos__img" src="images/logos/2.png" alt=""/>
              </div>
              <div className="logos__item">
                <img className="logos__img" src="images/logos/3.png" alt=""/>
              </div>
              <div className="logos__item">
                <img className="logos__img" src="images/logos/4.png" alt=""/>
              </div>
              <div className="logos__item">
                <img className="logos__img" src="images/logos/5.png" alt=""/>
              </div>
              <div className="logos__item">
                <img className="logos__img" src="images/logos/6.png" alt=""/>
              </div>
            </div>

          </div>
        </div>


         {/*Works */}
        <section className="section" id="works">
          <div className="container">
            <div className="section__header">
              <h3 className="section__suptitle">What we do</h3>
              <h2 className="section__title">some of our work</h2>
              <div className="section__text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>

          <div className="works">
            <div className="works__col">
              <div className="works__item">
                <img className="works__image" src="images/works/1.jpg" alt=""/>
                  <div className="works__info">
                    <img className="works__imag" src="images/service/photo2.png" alt=""/>
                      <div className="works__title">creatively designed</div>
                      <div className="works__text">Lorem ipsum dolor sit</div>
                  </div>
              </div>
              <div className="works__item">
                <img className="works__image" src="images/works/2.jpg" alt=""/>
                  <div className="works__info">
                    <img className="works__imag" src="images/service/photo2.png" alt=""/>
                      <div className="works__title">creatively designed</div>
                      <div className="works__text">Lorem ipsum dolor sit</div>
                  </div>
              </div>
            </div>

            <div className="works__col">
              <div className="works__item">
                <img className="works__image" src="images/works/3.jpg" alt=""/>
                  <div className="works__info">
                    <img className="works__imag" src="images/service/photo2.png" alt=""/>
                      <div className="works__title">creatively designed</div>
                      <div className="works__text">Lorem ipsum dolor sit</div>
                  </div>
              </div>
              <div className="works__item">
                <img className="works__image" src="images/works/4.jpg" alt=""/>
                  <div className="works__info">
                    <img className="works__imag" src="images/service/photo2.png" alt=""/>
                      <div className="works__title">creatively designed</div>
                      <div className="works__text">Lorem ipsum dolor sit</div>
                  </div>
              </div>
            </div>

            <div className="works__col">
              <div className="works__item">
                <img className="works__image" src="images/works/5.jpg" alt=""/>
                  <div className="works__info">
                    <img className="works__imag" src="images/service/photo2.png" alt=""/>
                      <div className="works__title">creatively designed</div>
                      <div className="works__text">Lorem ipsum dolor sit</div>
                  </div>
              </div>
            </div>

            <div className="works__col">
              <div className="works__item">
                <img className="works__image" src="images/works/6.jpg" alt=""/>
                  <div className="works__info">
                    <img className="works__imag" src="images/service/photo2.png" alt=""/>
                      <div className="works__title">creatively designed</div>
                      <div className="works__text">Lorem ipsum dolor sit</div>
                  </div>
              </div>
              <div className="works__item">
                <img className="works__image" src="images/works/7.jpg" alt=""/>
                  <div className="works__info">
                    <img className="works__imag" src="images/service/photo2.png" alt=""/>
                      <div className="works__title">creatively designed</div>
                      <div className="works__text">Lorem ipsum dolor sit</div>
                  </div>
              </div>
            </div>
          </div>{/*.works */}
        </section>


        {/*Reviews 2 */}
        <div className="section">
          <div className="container">

            <div className="reviews">

              <div data-slider="">
                <div>
                  <div className="reviews__item">
                    <img className="reviews__photo2" src="images/avatar.png" alt=""/>
                      <div className="reviews__text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”</div>
                      <div className="reviews__author">Joshua Earle</div>
                  </div>
                </div>

                <div>
                  <div className="reviews__item">
                    <img className="reviews__photo2" src="images/avatar.png" alt=""/>
                      <div className="reviews__text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”</div>
                      <div className="reviews__author">Joshua Earle</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/*Clients */}
        <section className="section  section--clients">
          <div className="container">

            <div className="section__header">
              <h3 className="section__suptitle">Happy Clients</h3>
              <h2 className="section__title">What people say</h2>
            </div>

            <div className="clients">
              <div className="clients__item">
                <img className="clients__photo" src="images/clients/1.png" alt=""/>
                  <div className="clients__content">
                    <div className="clients__name">Matthew Dix</div>
                    <div className="clients__prof">Graphic Design</div>
                    <div className="clients__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</div>
                  </div>
              </div>

              <div className="clients__item">
                <img className="clients__photo" src="images/clients/2.png" alt=""/>
                  <div className="clients__content">
                    <div className="clients__name">Nick Karvounis</div>
                    <div className="clients__prof">Graphic Design</div>
                    <div className="clients__text">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
                  </div>
              </div>

              <div className="clients__item">
                <img className="clients__photo" src="images/clients/3.png" alt=""/>
                  <div className="clients__content">
                    <div className="clients__name">Jaelynn Castillo </div>
                    <div className="clients__prof">Graphic Design</div>
                    <div className="clients__text">Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
                  </div>
              </div>

              <div className="clients__item">
                <img className="clients__photo" src="images/clients/4.png" alt=""/>
                  <div className="clients__content">
                    <div className="clients__name">Mike Petrucci</div>
                    <div className="clients__prof">Graphic Design</div>
                    <div className="clients__text">Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</div>
                  </div>
              </div>
            </div>{/*.clients*/}

          </div>{/*.container */}
        </section>


        {/*Blog */}
        <section className="section" id="blog">
          <div className="container">

            <div className="section__header">
              <h3 className="section__suptitle">Our stories</h3>
              <h2 className="section__title">Latest blog</h2>
            </div>

            <div className="blog">
              <div className="blog__item">
                <div className="blog__header">
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                  <a href="#">
                    <img className="blog__photo" src="images/blog/1.jpg" alt=""/>
                  </a>
                  <div className="blog__date">
                    <div className="blog__date-day">15</div>
                    Jan
                  </div>
                </div>
                <div className="blog__content">
                  <div className="blog__title">
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#">Lorem ipsum dolor sit amet</a>
                  </div>
                  <div className="blog__text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                <div className="blog__footer">
                  <div className="blog-stat">
                            <span className="blog-stat__item">
                                <i className="far fa-eye"></i> 542
                            </span>
                    <span className="blog-stat__item">
                                <i className="far fa-comment-dots"></i> 17
                            </span>
                  </div>
                </div>
              </div>

              <div className="blog__item">
                <div className="blog__header">
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                  <a href="#">
                    <img className="blog__photo" src="images/blog/2.jpg" alt=""/>
                  </a>
                  <div className="blog__date">
                    <div className="blog__date-day">14</div>
                    Jan
                  </div>
                </div>
                <div className="blog__content">
                  <div className="blog__title">
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#">sed do eiusmod tempor</a>
                  </div>
                  <div className="blog__text">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                <div className="blog__footer">
                  <div className="blog-stat">
                            <span className="blog-stat__item">
                                <i className="far fa-eye"></i> 992
                            </span>
                    <span className="blog-stat__item">
                                <i className="far fa-comment-dots"></i> 42
                            </span>
                  </div>
                </div>
              </div>

              <div className="blog__item">
                <div className="blog__header">
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                  <a href="#">
                    <img className="blog__photo" src="images/blog/3.jpg" alt=""/>
                  </a>
                  <div className="blog__date">
                    <div className="blog__date-day">12</div>
                    Jan
                  </div>
                </div>
                <div className="blog__content">
                  <div className="blog__title">
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#">incididunt ut labore et dolore</a>
                  </div>
                  <div className="blog__text">Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                <div className="blog__footer">
                  <div className="blog-stat">
                            <span className="blog-stat__item">
                                <i className="far fa-eye"></i> 1560
                            </span>
                    <span className="blog-stat__item">
                                <i className="far fa-comment-dots"></i> 98
                            </span>
                  </div>
                </div>
              </div>
            </div> {/*.blog */}

          </div> {/*.container*/}
        </section>


        {/*Map */}
        <section className="section  section--map">
          <div className="container">
            <div className="map">
              <h2 className="map__title">
                <div><i className="fas fa-map-marker-alt"></i></div>
                <a href="https://www.google.com/maps/@50.4182955,30.5204468,12.25z" target="_blank" rel="noreferrer">Open Map</a>
              </h2>
            </div>
          </div>
        </section>


         {/*Footer */}
        <footer className="footer" id="footer">
          <div className="container">

            <div className="footer__inner">
              <div className="footer__col  footer__col--first">
                <div className="footer__logo">MoGo</div>
                <div className="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

                <div className="footer__social">
                  <div className="footer__social-header">
                    <b>15k</b> followers
                  </div>
                  <div className="footer__social-content">
                    Follow Us:
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#" target="_blank">
                      <i className="fab fa-facebook"></i>
                    </a>
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#" target="_blank">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#" target="_blank">
                      <i className="fab fa-google-plus-square"></i>
                    </a>
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#" target="_blank">
                      <i className="fab fa-youtube"></i>
                    </a>
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#" target="_blank">
                      <i className="fas fa-basketball-ball"></i>
                    </a>
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#" target="_blank">
                      <i className="fab fa-tumblr"></i>
                    </a>

                  </div>
                </div>

                <form className="subscribe" action="/" method="post">
                  <input className="subscribe__input" type="email" name="name" placeholder="Your Email..."/>
                    <button className="subscribe__btn" type="submit">Subscribe</button>
                </form>
              </div>{/*.footer__col */}

              <div className="footer__col  footer__col--second">
                <div className="footer__title">Blogs</div>

                <div className="blogs">
                  <div className="blogs__item">
                    <img className="blogs__img" src="images/blog/1.jpg" alt=""/>
                      <div className="blogs__content">
                        {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <a className="blogs__title" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing</a>
                        <div className="blogs__date">Jan 9, 2016</div>
                      </div>
                  </div>

                  <div className="blogs__item">
                    <img className="blogs__img" src="images/blog/2.jpg" alt=""/>
                      <div className="blogs__content">
                        {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <a className="blogs__title" href="#">Consectetur adipiscing elit,sed do eiusmod tempor</a>
                        <div className="blogs__date">Jan 9, 2016</div>
                      </div>
                  </div>

                  <div className="blogs__item">
                    <img className="blogs__img" src="images/blog/3.jpg" alt=""/>
                      <div className="blogs__content">
                        {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <a className="blogs__title" href="#">sed do eiusmod tempor incididunt ut labore</a>
                        <div className="blogs__date">Jan 9, 2016</div>
                      </div>
                  </div>
                </div>{/*.blogs */}
              </div>

              <div className="footer__col  footer__col--third">
                <div className="footer__title">Instagram</div>

                <div className="instagram">
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                  <a className="instagram__item" href="#" target="_blank">
                    <img src="images/instagram/1.jpg" alt=""/>
                  </a>
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                  <a className="instagram__item" href="#" target="_blank">
                    <img src="images/instagram/2.jpg" alt=""/>
                  </a>
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                  <a className="instagram__item" href="#" target="_blank">
                    <img src="images/instagram/3.jpg" alt=""/>
                  </a>
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                  <a className="instagram__item" href="#" target="_blank">
                    <img src="images/instagram/4.jpg" alt=""/>
                  </a>
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                  <a className="instagram__item" href="#" target="_blank">
                    <img src="images/instagram/5.jpg" alt=""/>
                  </a>
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                  <a className="instagram__item" href="#" target="_blank">
                    <img src="images/instagram/6.jpg" alt=""/>
                  </a>
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                  <a className="instagram__item" href="#" target="_blank">
                    <img src="images/instagram/7.jpg" alt=""/>
                  </a>
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                  <a className="instagram__item" href="#" target="_blank">
                    <img src="images/instagram/8.jpg" alt=""/>
                  </a>
                  {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                  <a className="instagram__item" href="#" target="_blank">
                    <img src="images/instagram/9.jpg" alt=""/>
                  </a>

                </div>
              </div>

            </div> {/*.footer__inner */}

            <div className="copyright">
              © 2016 MoGo free PSD template by <span>Laaqiq</span>
            </div>

          </div>{/*.container */}
        </footer>
      </div>{/*.page */}
    </div>
  );
}

export default App;
