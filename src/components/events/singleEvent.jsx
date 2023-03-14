import React from "react";
import Image from "next/image";

const SingleEvent = ({ data }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="singleEvent event_single_page">
      <h2>{data.title}</h2>
      <Image width="1000" height="500" src={data.image} alt={data.title} />
      <p>{data.description}</p>
      <form onSubmit={handleSubmit} className="email_registration">
        <label>Register for the event</label>
        <br />
        <input type="email" id="email" placeholder="example@gmail.com" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SingleEvent;
