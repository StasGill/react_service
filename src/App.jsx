import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./style.css";
import PromoCard from "./component/card/Card";

function App() {
  return (
    <div>
      <div className="main_background">
        <div className="main_section">
          <h2 className="header">Принт Сервис</h2>
          <p className="main_text">
            Добро пожаловать в Принт Сервис — место, где идеи обретают форму! Мы
            превращаем ваши макеты, мысли и вдохновение в качественную
            полиграфию, которая работает на вас. 🎨 Что мы предлагаем: Цифровая
            и офсетная печать — от визиток до каталогов Фирменный стиль —
            бланки, наклейки, бейджи и упаковка Печать на текстиле — футболки,
            худи и эко-сумки Сувенирная продукция — кружки, календари, брелоки
            Услуги дизайна — поможем оформить вашу идею
          </p>
          <button className="promo-button">
            <a href="tel:+48123456789">
              Позвонить <br />
              +4812345678
            </a>
          </button>
        </div>
      </div>
      <div className="second_section">
        <div className="second_container">
          <h3 className="header_second">Наши услуги</h3>
          <div className="card_container">
            <PromoCard />
            <PromoCard />
            <PromoCard />
            <PromoCard />
          </div>
        </div>
      </div>
      <iframe
        src="https://yandex.com/map-widget/v1/?ll=38.084504%2C47.115431&mode=poi&poi%5Bpoint%5D=38.084297%2C47.115950&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D60429959359&z=18.45"
        width="600"
        height="400"
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default App;
