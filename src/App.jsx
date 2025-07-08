import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./style.css";
import PromoCard from "./component/card/Card";

function App() {
  return (
    <div>
      <div className="main_section">
        <h2 className="header">Принт Сервис</h2>
        <p className="main_text">
          Добро пожаловать в PrintLab — место, где идеи обретают форму! Мы
          превращаем ваши макеты, мысли и вдохновение в качественную полиграфию,
          которая работает на вас. 🎨 Что мы предлагаем: Цифровая и офсетная
          печать — от визиток до каталогов Фирменный стиль — бланки, наклейки,
          бейджи и упаковка Печать на текстиле — футболки, худи и эко-сумки
          Сувенирная продукция — кружки, календари, брелоки Услуги дизайна —
          поможем оформить вашу идею
        </p>
        <button className="main_section-button">Посмотреть рассценки</button>
      </div>
      <div className="second_section">
        <div className="test">
          <h3 className="header_second">Наши услуги</h3>
          <div className="card_container">
            <PromoCard />
            <PromoCard />
            <PromoCard />
            <PromoCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
