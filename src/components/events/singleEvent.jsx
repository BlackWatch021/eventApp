import React from "react";
import Image from "next/image";

const SingleEvent = ({ data }) => {
  return (
    <div className="singleEvent">
      <h2>{data.title}</h2>
      <Image width="1000" height="500" src={data.image} alt={data.title} />
      <p>{data.description}</p>
      <input type="email" placeholder="example@gmail.com" />
      <button>Submit</button>
    </div>
  );
};

export default SingleEvent;
