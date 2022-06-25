import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID C2JsTu7B2S0MjVeHoss13JUKd7fN5U4zXFJnqMJCqYg",
  },
});
