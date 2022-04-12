import './App.css';

import Header from './Component/Header';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>

        <div className="hero">

          <div className="container">

            <div className="left">

              <h1 className="h1">
                Hi, I'm <b>Julia&nbsp;Walker</b>.
                <br />Web Developer
              </h1>

              <p className="h3">
                Specialized in <abbr title="Accessibility">a11y</abbr>
                and Core Web Vitals
              </p>

              <div className="btn-group">
                <a href="#" className="btn btn-primary">Contact Me</a>
                <a href="#" className="btn btn-secondary">About Me</a>
              </div>

            </div>

            <div className="right">

              <div className="pattern-bg"></div>
              <div className="img-box">
                <img src="./assets/images/hero.png" alt="Julia Walker" className="hero-img" />
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
              </div>

            </div>

          </div>

        </div>





        <div className="main">

          <div className="container">

            <div className="blog">

              <h2 className="h2">Latest Blog Post</h2>

              <div className="blog-card-group">

                <div className="blog-card">

                  <div className="blog-card-banner">
                    <img src="./assets/images/blog-1.png" alt="Building microservices with Dropwizard, MongoDB & Docker"
                      width="250" className="blog-banner-img" />
                  </div>

                  <div className="blog-content-wrapper">

                    <button className="blog-topic text-tiny">Database</button>

                    <h3>
                      <a href="#" className="h3">
                        Building microservices with Dropwizard, MongoDB & Docker
                      </a>
                    </h3>

                    <p className="blog-text">
                      This NoSQL database oriented to documents (by documents like JSON) combines some of the features from
                      relational
                      databases, easy to use and the multi-platform is the best option for scale up and have fault
                      tolerance, load balancing,
                      map reduce, etc.
                    </p>

                    <div className="wrapper-flex">

                      <div className="profile-wrapper">
                        <img src="./assets/images/author.png" alt="Julia Walker" width="50" />
                      </div>

                      <div className="wrapper">
                        <a href="#" className="h4">Julia Walker</a>

                        <p className="text-sm">
                          <time dateTime="2022-01-17">Jan 17, 2022</time>
                          <span className="separator"></span>
                          <ion-icon name="time-outline"></ion-icon>
                          <time dateTime="PT3M">3 min</time>
                        </p>
                      </div>

                    </div>

                  </div>

                </div>


                <div className="blog-card">

                  <div className="blog-card-banner">
                    <img src="./assets/images/blog-2.png" alt="Fast web page loading on a $20 feature phone" width="250"
                      className="blog-banner-img" />
                  </div>

                  <div className="blog-content-wrapper">

                    <button className="blog-topic text-tiny">Web Performance</button>

                    <h3><a href="" className="h3">Fast web page loading on a $20 feature phone</a></h3>

                    <p className="blog-text">
                      Feature phones are affordable (under $20-25), low-end devices enabling 100s of millions of users in
                      developing countries
                      to leverage the web. Think of them as a light version of a smart phone.
                    </p>

                    <div className="wrapper-flex">

                      <div className="profile-wrapper">
                        <img src="./assets/images/author.png" alt="Julia walker" width="50" />
                      </div>

                      <div className="wrapper">
                        <a href="#" className="h4">Julia Walker</a>

                        <p className="text-sm">
                          <time dateTime="2021-12-10">Dec 10, 2021</time>
                          <span className="separator"></span>
                          <ion-icon name="time-outline"></ion-icon>
                          <time dateTime="PT2M">2 min</time>
                        </p>
                      </div>

                    </div>

                  </div>

                </div>


                <div className="blog-card">

                  <div className="blog-card-banner">
                    <img src="./assets/images/blog-3.png" alt="Accessibility Tips for Web Developers" width="250"
                      className="blog-banner-img" />
                  </div>

                  <div className="blog-content-wrapper">

                    <button className="blog-topic text-tiny">Accessibility</button>

                    <h3><a href="" className="h3">Accessibility Tips for Web Developers</a></h3>

                    <p className="blog-text">
                      It's awesome to build sites that are inclusive and accessible to everyone. There are at least six key
                      areas of
                      disability we can optimize for: visual, hearing, mobility, cognition, speech and neural. Many tools
                      and resources can
                      help here, even if you're totally new to web accessibility.
                    </p>

                    <div className="wrapper-flex">

                      <div className="profile-wrapper">
                        <img src="./assets/images/author.png" alt="Julia walker" width="50" />
                      </div>

                      <div className="wrapper">
                        <a href="#" className="h4">Julia Walker</a>

                        <p className="text-sm">
                          <time dateTime="2021-11-28">Nov 28, 2021</time>
                          <span className="separator"></span>
                          <ion-icon name="time-outline"></ion-icon>
                          <time dateTime="PT4M">4 min</time>
                        </p>
                      </div>

                    </div>

                  </div>

                </div>


                <div className="blog-card">

                  <div className="blog-card-banner">
                    <img src="./assets/images/blog-4.png" alt="Dynamically Securing Databases using Hashicorp Vault"
                      width="250" className="blog-banner-img" />
                  </div>

                  <div className="blog-content-wrapper">

                    <button className="blog-topic text-tiny">Database</button>

                    <h3><a href="" className="h3">Dynamically Securing Databases using Hashicorp Vault</a></h3>

                    <p className="blog-text">
                      Nowadays, it's hard to profoundly talk about security in the IT industry, since it has to be
                      considered on so many
                      different levels: from securing code chunks, securing containers, up to securing complex
                      infrastructures and defining
                      strong authorization and authentication policies across the enterprise.
                    </p>

                    <div className="wrapper-flex">

                      <div className="profile-wrapper">
                        <img src="./assets/images/author.png" alt="Julia walker" width="50" />
                      </div>

                      <div className="wrapper">
                        <a href="#" className="h4">Julia Walker</a>

                        <p className="text-sm">
                          <time dateTime="2021-11-20">Nov 20, 2021</time>
                          <span className="separator"></span>
                          <ion-icon name="time-outline"></ion-icon>
                          <time dateTime="PT4M">4 min</time>
                        </p>
                      </div>

                    </div>

                  </div>

                </div>


                <div className="blog-card">

                  <div className="blog-card-banner">
                    <img src="./assets/images/blog-5.png"
                      alt="Adaptive Loading - Improving Web Performance on low-end devices" width="250"
                      className="blog-banner-img" />
                  </div>

                  <div className="blog-content-wrapper">

                    <button className="blog-topic text-tiny">Web Performance</button>

                    <h3><a href="" className="h3">Adaptive Loading - Improving Web Performance on low-end devices</a></h3>

                    <p className="blog-text">
                      Adaptive Loading: Do not just respond based on screen size, adapt based on actual device hardware.
                      Any user can have a slow experience. In a world with widely varying device capabilities, a "one-size"
                      fits all
                      experience may not always work. Sites that delight users on high-end devices can be unusable on
                      low-end ones,
                      particularly on median mobile and desktop hardware and in emerging markets.
                    </p>

                    <div className="wrapper-flex">

                      <div className="profile-wrapper">
                        <img src="./assets/images/author.png" alt="Julia walker" width="50" />
                      </div>

                      <div className="wrapper">
                        <a href="#" className="h4">Julia Walker</a>

                        <p className="text-sm">
                          <time dateTime="2021-11-10">Nov 10, 2021</time>
                          <span className="separator"></span>
                          <ion-icon name="time-outline"></ion-icon>
                          <time dateTime="PT3M">3 min</time>
                        </p>
                      </div>

                    </div>

                  </div>

                </div>


                <div className="blog-card">

                  <div className="blog-card-banner">
                    <img src="./assets/images/blog-6.png"
                      alt="Don't Develop Just for Yourself - A Developer's Checklist to Accessibility" width="250"
                      className="blog-banner-img" />
                  </div>

                  <div className="blog-content-wrapper">

                    <button className="blog-topic text-tiny">Accessibility</button>

                    <h3><a href="" className="h3">Don't Develop Just for Yourself - A Developer's Checklist to Accessibility</a>
                    </h3>

                    <p className="blog-text">
                      We, as developers, tend to develop sites unconsciously for people like ourselves. If we don't actively
                      pay attention,
                      the sites are often accessible only for certain types of people: Sighted mouse-users, who have good
                      fine motor skills
                      and are good at using computers.
                    </p>

                    <div className="wrapper-flex">

                      <div className="profile-wrapper">
                        <img src="./assets/images/author.png" alt="Julia walker" width="50" />
                      </div>

                      <div className="wrapper">
                        <a href="#" className="h4">Julia Walker</a>

                        <p className="text-sm">
                          <time dateTime="2021-10-25">Oct 25, 2021</time>
                          <span className="separator"></span>
                          <ion-icon name="time-outline"></ion-icon>
                          <time dateTime="PT7M">7 min</time>
                        </p>
                      </div>

                    </div>

                  </div>

                </div>


                <div className="blog-card">

                  <div className="blog-card-banner">
                    <img src="./assets/images/blog-7.png" alt="Building a Restful CRUD API with Node JS, Express, and MongoDB"
                      width="250" className="blog-banner-img" />
                  </div>

                  <div className="blog-content-wrapper">

                    <button className="blog-topic text-tiny">Database</button>

                    <h3><a href="" className="h3">Building a Restful CRUD API with Node JS, Express, and MongoDB</a></h3>

                    <p className="blog-text">
                      Application Programming Interface is the abbreviation for API. An API is a software interface that
                      enables two apps to
                      communicate with one another. In other words, an API is a messenger that sends your request to the
                      provider and then
                      returns the response to you.
                    </p>

                    <div className="wrapper-flex">

                      <div className="profile-wrapper">
                        <img src="./assets/images/author.png" alt="Julia walker" width="50" />
                      </div>

                      <div className="wrapper">
                        <a href="#" className="h4">Julia Walker</a>

                        <p className="text-sm">
                          <time dateTime="2021-10-15">Oct 15, 2021</time>
                          <span className="separator"></span>
                          <ion-icon name="time-outline"></ion-icon>
                          <time dateTime="PT5M">5 min</time>
                        </p>
                      </div>

                    </div>

                  </div>

                </div>


                <div className="blog-card">

                  <div className="blog-card-banner">
                    <img src="./assets/images/blog-8.png" alt="Monitoring Performance with the PageSpeed Insights API"
                      width="250" className="blog-banner-img" />
                  </div>

                  <div className="blog-content-wrapper">

                    <button className="blog-topic text-tiny">Web Performance</button>

                    <h3><a href="" className="h3">Monitoring Performance with the PageSpeed Insights API</a></h3>

                    <p className="blog-text">
                      The PageSpeed Insights API provides free access to performance monitoring for web pages and returns
                      data with
                      suggestions for how to improve. The V5 API includes lab data from Lighthouse and real-world data from
                      the Chrome User
                      Experience Report (CrUX).
                    </p>

                    <div className="wrapper-flex">

                      <div className="profile-wrapper">
                        <img src="./assets/images/author.png" alt="Julia walker" width="50" />
                      </div>

                      <div className="wrapper">
                        <a href="#" className="h4">Julia Walker</a>

                        <p className="text-sm">
                          <time dateTime="2021-10-03">Oct 3, 2021</time>
                          <span className="separator"></span>
                          <ion-icon name="time-outline"></ion-icon>
                          <time dateTime="PT5M">5 min</time>
                        </p>
                      </div>

                    </div>

                  </div>

                </div>


                <div className="blog-card">

                  <div className="blog-card-banner">
                    <img src="./assets/images/blog-9.png" alt="The best web accessibility tools for developers in 2021"
                      width="250" className="blog-banner-img" />
                  </div>

                  <div className="blog-content-wrapper">

                    <button className="blog-topic text-tiny">Accessibility</button>

                    <h3><a href="" className="h3">The best web accessibility tools for developers in 2021</a>
                    </h3>

                    <p className="blog-text">
                      The quality of the tools you use defines the speed with which you can diagnose and resolve problems.
                      Each year the landscape changes dramatically in web technologies, and of late the tooling for
                      accessibility is no
                      exception.
                    </p>

                    <div className="wrapper-flex">

                      <div className="profile-wrapper">
                        <img src="./assets/images/author.png" alt="Julia walker" width="50" />
                      </div>

                      <div className="wrapper">
                        <a href="#" className="h4">Julia Walker</a>

                        <p className="text-sm">
                          <time dateTime="2021-09-13">Sep 13, 2021</time>
                          <span className="separator"></span>
                          <ion-icon name="time-outline"></ion-icon>
                          <time dateTime="PT7M">7 min</time>
                        </p>
                      </div>

                    </div>

                  </div>

                </div>


                <div className="blog-card">

                  <div className="blog-card-banner">
                    <img src="./assets/images/blog-10.png" alt="How to connect a React frontend with a NodeJS/Express backend"
                      width="250" className="blog-banner-img" />
                  </div>

                  <div className="blog-content-wrapper">

                    <button className="blog-topic text-tiny">Database</button>

                    <h3><a href="" className="h3">How to connect a React frontend with a NodeJS/Express backend</a></h3>

                    <p className="blog-text">
                      The MERN (MongoDB, Express, React, NodeJS) stack is very popular for making full stack applications,
                      utilizing
                      Javascript for both the backend and frontend as well as a document-oriented or non relational database
                      (MongoDB),
                      meaning that it's structured like JSON rather than a large excel sheet like SQL databases are.
                    </p>

                    <div className="wrapper-flex">

                      <div className="profile-wrapper">
                        <img src="./assets/images/author.png" alt="Julia walker" width="50" />
                      </div>

                      <div className="wrapper">
                        <a href="#" className="h4">Julia Walker</a>

                        <p className="text-sm">
                          <time dateTime="2021-09-21">Sep 21, 2021</time>
                          <span className="separator"></span>
                          <ion-icon name="time-outline"></ion-icon>
                          <time dateTime="PT4M">4 min</time>
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <button className="btn load-more">Load More</button>

            </div>

            <div className="aside">

              <div className="topics">

                <h2 className="h2">Topics</h2>

                <a href="#" className="topic-btn">
                  <div className="icon-box">
                    <ion-icon name="server-outline"></ion-icon>
                  </div>

                  <p>Database</p>
                </a>

                <a href="#" className="topic-btn">
                  <div className="icon-box">
                    <ion-icon name="accessibility-outline"></ion-icon>
                  </div>

                  <p>Accessibility</p>
                </a>

                <a href="#" className="topic-btn">
                  <div className="icon-box">
                    <ion-icon name="rocket-outline"></ion-icon>
                  </div>

                  <p>Web Performance</p>
                </a>

              </div>

              <div className="tags">

                <h2 className="h2">Tags</h2>

                <div className="wrapper">

                  <button className="hashtag">#mongodb</button>
                  <button className="hashtag">#nodejs</button>
                  <button className="hashtag">#a11y</button>
                  <button className="hashtag">#mobility</button>
                  <button className="hashtag">#inclusion</button>
                  <button className="hashtag">#webperf</button>
                  <button className="hashtag">#optimize</button>
                  <button className="hashtag">#performance</button>

                </div>

              </div>

              <div className="contact">

                <h2 className="h2">Let's Talk</h2>

                <div className="wrapper">

                  <p>
                    Do you want to learn more about how I can help your company overcome problems? Let us have a
                    conversation.
                  </p>

                  <ul className="social-link">

                    <li>
                      <a href="#" className="icon-box discord">
                        <ion-icon name="logo-discord"></ion-icon>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="icon-box twitter">
                        <ion-icon name="logo-twitter"></ion-icon>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="icon-box facebook">
                        <ion-icon name="logo-facebook"></ion-icon>
                      </a>
                    </li>

                  </ul>

                </div>

              </div>

              <div className="newsletter">

                <h2 className="h2">Newsletter</h2>

                <div className="wrapper">

                  <p>
                    Subscribe to our newsletter to be among the first to keep up with the latest updates.
                  </p>

                  <form action="#">
                    <input type="email" name="email" placeholder="Email Address" required />

                    <button type="submit" className="btn btn-primary">Subscribe</button>
                  </form>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>
      <Footer/>
    </div>
  );
}

export default App;
