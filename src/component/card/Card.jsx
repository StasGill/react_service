import React, { useState } from "react";
import "./styles.css";
import sampleImage from "../../img/printer.jpg"; // Подставь свой путь к изображению

const PromoCard = () => {
  const [showPricing, setShowPricing] = useState(false);

  const togglePricing = () => {
    setShowPricing(!showPricing);
  };

  return (
    <div className="promo-card">
      <img src={sampleImage} alt="Печать" className="promo-image" />
      <div className="inner_container">
        <h2 className="promo-title">Подключайся и печатай</h2>
        <p className="promo-description">
          Удобный и быстрый сервис печати прямо из твоего устройства. Где бы ты
          ни был — сделаем всё красиво.
        </p>

        <div className="pricing-section">
          <button className="pricing-toggle" onClick={togglePricing}>
            {showPricing ? "Скрыть расценки ▲" : "Показать расценки ▼"}
          </button>

          {showPricing && (
            <div className="pricing-list">
              <div className="price-item">
                <span>Чёрно-белая печать</span>
                <span>1.00 PLN / стр.</span>
              </div>
              <div className="price-item">
                <span>Цветная печать</span>
                <span>2.50 PLN / стр.</span>
              </div>
              <div className="price-item">
                <span>Фотопечать A4</span>
                <span>5.00 PLN</span>
              </div>
              <div className="price-item">
                <span>Ламинирование</span>
                <span>3.00 PLN</span>
              </div>
            </div>
          )}
        </div>
        <button className="promo-button">Заказать</button>
      </div>
    </div>
  );
};

export default PromoCard;
