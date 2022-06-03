import axios from "axios";

const BASE_PATH = `${import.meta.env.VITE_API_ADDRESS}`;

const Greeting = async () => {
  const { data } = await axios.get(`${BASE_PATH}`);
  return data;
};


export { Greeting, tambahGrup };
