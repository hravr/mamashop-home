import React from "react";
import s from "./Bonus.module.css";

const Bonus = ({ style }) => {
  return (
    <div className={s.card} style={style}>
      <div className={s.card_pad}>
        <div className={s.icon_new}></div>
        <img
          className={s.img}
          src={
            "https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/l-o-l-surprise-group-i70153.jpg"
          }
          alt="product-img"
        />
        <p
          style={{
            textAlign: "left",
            color: "gray",
            margin: 0,
            width: "50%",
            fontSize: "10px",
            paddingTop: "5px",
          }}
        >
          2 weeks
        </p>
      </div>
      <div className={s.buy}>
        <p className={s.title}>-50% LOL Surprise</p>
      </div>
    </div>
  );
};

export default Bonus;
