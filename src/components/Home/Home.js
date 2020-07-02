import React from "react";
import s from "./Home.module.css";
import robot from "../../assets/robot.svg";
import chat from "../../assets/chat.svg";
import money from "../../assets/money.svg";
import car from "../../assets/car.svg";
import girl from "../../assets/girl.svg";
import boy from "../../assets/boy.svg";
import toys from "../../assets/toys.svg";
import clothes from "../../assets/clothes.svg";
import baby from "../../assets/baby.svg";
import Card from "../../misc/Card/Card";
import Bonus from "../../misc/Bonus/Bonus";

const Home = () => {
  const arr = [1, 2];
  return (
    <main className={s.main}>
      <div className={s.robotoSearch}>
        <div>
          <p className={s.searchText}>
            <span>Привіт</span>, я допоможу знайти<span> найкращий </span> 
            подарунок для Вашого  <span> малюка</span>
          </p>
          <input
            type="text"
            className={s.searchInput}
            placeholder="Я шукаю..."
          />
        </div>
        <img alt="robot" src={robot} />
      </div>

      <h3 className={s.question}>Чому обирають нас?</h3>

      <div className={s.advangates}>
        <div className={s.advangate}>
          <img src={car} alt="car" />
          <p>Швидка доставка  по всій Україні</p>
        </div>
        <div className={s.advangate}>
          <img src={money} alt="money" />
          <p>Лояльні ціни на товари</p>
        </div>
        <div className={s.advangate}>
          <img src={chat} alt="chat" />
          <p>Підтримка  24/7</p>
        </div>
      </div>

      <div className={s.gender}>
        <div className={s.boy}>
          <p>Хлопчикам</p>
          <img className={s.genderImgBoy} src={boy} alt="boy" />
        </div>
        <div className={s.girl}>
          <p>Дівчаткам</p>
          <img className={s.genderImgGirl} src={girl} alt="girl" />
        </div>
      </div>

      <div className={s.categories}>
        <h3 className={s.category__title}>
          Категорії <br /> товарів
        </h3>
        <div className={s.category__baby}>
          <img src={baby} alt="baby" />
        </div>
        <div className={s.category_rest}>
          <div className={s.category__clothes}>
            <img src={clothes} alt="clothes" />
          </div>
          <div className={s.category__toys}>
            <img src={toys} alt="toys" />
          </div>
        </div>
      </div>

      <h3 className={s.new__title}>Новинки</h3>
      <div className={s.new__products}>
        {arr.map((product) => (
          <Card />
        ))}
      </div>

      <h3 className={s.popular__title}>Популярні товари</h3>
      <div className={s.new__products}>
        {arr.map((product) => (
          <Card />
        ))}
      </div>

      <h3 className={s.bonus__title}>Акції</h3>
      <div className={s.new__bonus}>
        <Bonus style={{ opacity: 0.3 }} />
        <Bonus />
        <Bonus style={{ opacity: 0.3 }} />
      </div>
    </main>
  );
};

export default Home;
