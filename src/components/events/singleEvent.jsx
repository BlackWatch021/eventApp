import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const SingleEvent = ({ data }) => {
  const inputEmail = useRef("");
  const router = useRouter();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = inputEmail.current.value;
    const id = router?.query.id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(validRegex)) {
      setMessage("Please introduce a correct email address");
    }

    try {
      // POST req
      //body=email + id

      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, id }),
      });

      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = "";
      console.log("data", data);
    } catch (err) {
      console.error("Error", err);
    }
  };

  return (
    <div className="singleEvent event_single_page">
      <h2>{data.title}</h2>
      <Image width="1000" height="500" src={data.image} alt={data.title} />
      <p>{data.description}</p>
      <form onSubmit={handleSubmit} className="email_registration">
        <label>Register for the event</label>
        <br />
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="example@gmail.com"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SingleEvent;
