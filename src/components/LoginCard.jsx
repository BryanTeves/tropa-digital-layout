import tropa from "../assets/images/mini-tropa-digital.png";
import notebook from "../assets/images/mini-notebook-clean.png";

import { Link, Navigate } from "react-router-dom";

import { FaEyeSlash } from "react-icons/fa";

function loginCard() {
  const click = (e) => {
    const btn = document.querySelector(".btn");

    btn.style.filter = "brightness(1.4)";

    setTimeout(() => {
      btn.style.filter = "brightness(1)";
    }, 500);
  };

  return (
    <>
      <div className="main-background" onClick={click}>
        <main className="login_main">
          <div className="login_div-form">
            <div className="login_div-form--image">
              <img
                src={tropa}
                alt="Tropa digital - logo"
                className="tropa-image"
              />
            </div>
            <h1>
              Bem Vindo ao <span className="orange">painel</span>
            </h1>
            <form className="login_form">
              <div className="login_form-input--text">
                <input
                  type="text"
                  placeholder="Digite seu e-mail"
                  className="login_form-input"
                  disabled
                />
              </div>
              <div className="login_form-input--password">
                <input
                  type="password"
                  placeholder="Digite sua senha"
                  className="login_form-input"
                  disabled
                />
                <FaEyeSlash className="login-icon" />
              </div>
              <div className="form_input-btn">
                <Link to={"/home"}>
                  <input type="button" value="Acessar" className="btn" />
                </Link>
              </div>
            </form>
          </div>
          <div className="login_div-images">
            <img src={notebook} alt="notebook" className="notebook-image" />
          </div>
        </main>
      </div>
    </>
  );
}

export default loginCard;
