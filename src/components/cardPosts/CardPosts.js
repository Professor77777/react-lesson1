import React from "react";
import styles from "./CardPosts.module.css";

const CardPosts = (props) => {
  const { dataApi } = props;
  console.log(dataApi);

  if (dataApi.length > 0) {
    return dataApi.map((item, index) => (
      <div key={index} className={styles.card}>
        <h3>{item.title}</h3>
        <h5>{item.body}</h5>
      </div>
    ));
  }
  return <div>Data not found!</div>;
};

export default CardPosts;
