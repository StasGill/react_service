import React, { useState } from "react";
import "./styles.css";

const TruncatedText = (text, maxLength) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded((prev) => !prev);
  };

  const renderText = () => {
    if (isExpanded || text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div>
      <p>{renderText()}</p>
      {text.length > maxLength && (
        <button
          onClick={toggleText}
          style={{
            background: "none",
            border: "none",
            color: "blue",
            cursor: "pointer",
          }}
        >
          {isExpanded ? "Скрыть" : "Показать полностью"}
        </button>
      )}
    </div>
  );
};

const PromoCard = ({ item }) => {
  const [showPricing, setShowPricing] = useState(false);

  const togglePricing = () => {
    setShowPricing(!showPricing);
  };

  return (
    <div className="promo-card">
      <img src={item?.image} alt="Печать" className="promo-image" />
      <div className="inner_container">
        <h2 className="promo-title">{item?.header}</h2>
        <p className="promo-description">{TruncatedText(item?.text, 300)}</p>

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
