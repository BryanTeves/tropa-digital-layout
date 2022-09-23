import HomeCard from "./HomeCard";

import tropa from "../assets/images/mini-tropa-digital.png";

import { FiBarChart, FiTrendingUp, FiFileText } from "react-icons/fi";

function HomeLayout() {
  return (
    <>
      <div className="home-background">
        <header className="home_header">
          <div className="home_header-img">
            <img
              src={tropa}
              alt="Tropa Digital - logo"
              className="home_header-img--tropa"
            />
          </div>
          <div className="home_header_items">
            <ul className="home_header-ul">
              <li>
                <FiBarChart className="home-icon orange tiny" /> Início
              </li>
              <li>
                <FiFileText className="home-icon" /> Contatos
              </li>
              <li>
                <FiTrendingUp className="home-icon" /> Relatórios
              </li>
              <li>
                <FiFileText className="home-icon" /> Contatos
              </li>
              <li>
                <FiFileText className="home-icon" /> Contatos
              </li>
              <li>
                <FiFileText className="home-icon" /> Contatos
              </li>
            </ul>
          </div>
        </header>

        <main className="home_main">
          <div className="home_main-title">
            <h1>
              Olá <span className="gray">Usuário</span>
            </h1>
          </div>

          <div className="home_main-card">
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </div>
        </main>
      </div>
    </>
  );
}

export default HomeLayout;
