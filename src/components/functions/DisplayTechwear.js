import React, { Fragment, useEffect, useState } from "react";
import ClothingCard from "../card/ClothingCard";

const DisplayTechwear = (props) => {
  const [techwear, setTechwear] = useState([]);

  const getTechwear = async () => {
    try {
      const response = await fetch(
        "https://outfit-generator-backend.herokuapp.com/techwear/" +
          props.color +
          "/" +
          props.techwearStyle +
          "/" +
          props.article
      );
      const jsonData = await response.json();
      setTechwear(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getTechwear();   
    // eslint-disable-next-line
  }, []);
  console.log(techwear);

  return (
    <Fragment>
      {" "}
      {techwear.map((clothing) => (
        <ClothingCard
          clothingImage={clothing.image}
          clothingPrice={"$" + clothing.price}
          clothingName={clothing.name}
          clothingLink={clothing.link}
        />
      ))}
    </Fragment>
  );
};

export default DisplayTechwear;
