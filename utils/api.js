import axios from "axios";

export const fetchEvents = () => {
  return axios
    .get("https://thedistance.co.uk/wp-content/uploads/2020/01/eventbrite.json")
    .then(({ data: { events } }) => {
      return events;
    });
};
