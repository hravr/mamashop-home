import React from "react";
import s from "./Card.module.css";
import img from "../../assets/img.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div className={s.card}>
      <div className={s.card_pad}>
        <div className={s.icon_new}></div>
        <img className={s.img} src={img} alt="product-img" />
        <p className={s.title}>Набір-сюрприз LOL Surprise</p>
        <div className={s.options}>
          <div className={s.counter}>
            <button className={s.btn}>-</button>
            <span className={s.number}>1</span>
            <button className={s.btn}>+</button>
          </div>
          <FontAwesomeIcon icon={faHeart} color={"#ff0066"} size={"lg"} />
        </div>
      </div>
      <div className={s.buy}>
        <p className={s.price}>999$</p>
        <p className={s.btn__buy}>КУПИТИ</p>
      </div>
    </div>
  );
};

export default Card;
