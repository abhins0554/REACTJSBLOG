import React from "react";

function Header(props) {

  const ONTHEMECHANGE = async () => {
    // theme toggle variables
    const themeBtn = document.querySelectorAll(".theme-btn");

    for (let i = 0; i < themeBtn.length; i++) {
      themeBtn[i].addEventListener("click", function () {
        // toggle `light-theme` & `dark-theme` class from `body`
        // when clicked `theme-btn`
        document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme");

        for (let i = 0; i < themeBtn.length; i++) {
          // When the `theme-btn` is clicked,
          // it toggles classes between `light` & `dark` for all `theme-btn`.
          themeBtn[i].classList.toggle("light");
          themeBtn[i].classList.toggle("dark");
        }
      });
    }
  };
  
  return (
    <div>
      <header>
        <div className="container">
          <nav className="navbar">
            <a href="#">
              <img
                src="./assets/images/logo-light.svg"
                alt="Devblog's logo"
                width="150"
                height="40"
                className="logo-light"
              />
              <img
                src="./assets/images/logo-dark.svg"
                alt="Devblog's logo"
                width="150"
                height="40"
                className="logo-dark"
              />
            </a>

            <div className="btn-group">
              <button className="theme-btn theme-btn-mobile light">
                <ion-icon name="moon" className="moon"></ion-icon>
                <ion-icon name="sunny" className="sun"></ion-icon>
              </button>

              <button className="nav-menu-btn">
                <ion-icon name="menu-outline"></ion-icon>
              </button>
            </div>

            <div className="flex-wrapper">
              <ul className="desktop-nav">
                <li>
                  <a href="#" className="nav-link">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#" className="nav-link">
                    About Me
                  </a>
                </li>

                <li>
                  <a href="#" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>

              <button className="theme-btn theme-btn-desktop light"  onClick={()=>ONTHEMECHANGE()}>
                <ion-icon name="moon" className="moon"></ion-icon>
                <ion-icon name="sunny" className="sun"></ion-icon>
              </button>
            </div>

            <div className="mobile-nav">
              <button className="nav-close-btn">
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <div className="wrapper">
                <p className="h3 nav-title">Main Menu</p>

                <ul>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      About Me
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="h3 nav-title">Topics</p>

                <ul>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Database
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Accessibility
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Web Performance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
