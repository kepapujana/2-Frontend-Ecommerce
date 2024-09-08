import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TheFooter.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";

const TheFooter = () => {
  const navigate = useNavigate();
  const { token, logout } = useContext(UserContext);

  const logoutUser = () => {
    logout();
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                En la tienda <i> KEPA&ARNOLD</i> , creemos en un consumo consciente y respetuoso con
                el medio ambiente. Por eso, seleccionamos cuidadosamente nuestros productos,
                priorizando aquellos que son ecológicos, sostenibles y fabricados con materiales
                naturales. Al elegir nuestros productos, estás contribuyendo a un futuro más verde y
                sostenible.
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links">
                <li>
                  <a href="#/">Juguetes</a>
                </li>
                <li>
                  <a href="#">Hogar</a>
                </li>

                <li>
                  <a href="#">Pintura</a>
                </li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <Link to="/" className="nav-menu-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="nav-menu-link">
                    Products
                  </Link>
                </li>
                {token ? (
                  <>
                    <li className="nav-menu-item">
                      <Link to="/profile" className="nav-menu-link">
                        Profile
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="nav-menu-item">
                    <Link to="/login" className="nav-menu-link">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2024 All Rights Reserved by
                <a href="#">kepa&arnold</a>.
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <a class="facebook" href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="#">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default TheFooter;