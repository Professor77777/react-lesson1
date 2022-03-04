import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const { dataApi } = props;
  console.log(dataApi);

  if (dataApi.length > 0) {
    return dataApi.map((item, index) => (
      <div key={index} className={styles.card}>
        <h3>{item.name}</h3>
        <h5>{item.email}</h5>
        <h6>{item.phone}</h6>
      </div>
    ));
  }
  return <div>Data not found!</div>;
};

export default Card;
