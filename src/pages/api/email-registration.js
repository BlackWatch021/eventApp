import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(req, res) {
  const { method } = req;

  //Access our database, here data.json.
  //then find the data associated with the passed event id, and add the registered email in it.
  //Note email must be unique to be stored in the data base. Means we won't be saving same email twice or more for the same event.

  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  if (!allEvents) {
    return res.status(404).json({ message: "Events data not found" });
  }

  if (method === "POST") {
    const { email, id } = req.body;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(validRegex)) {
      res.status(422).json({ message: "Invalid email address" });
    }

    const newAllEvents = allEvents.map((el) => {
      if (el.id === id) {
        if (el.emails_registered.includes(email)) {
          res
            .status(409)
            .json({ message: "This email has already been registered" });
          return el;
        }
        return {
          ...el,
          emails_registered: [...el.emails_registered, email],
        };
      }
      return el;
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );

    res.status(200).json({
      message: `You are registered for this event with the email : ${email} and event id : ${id}`,
    });
  }
}
