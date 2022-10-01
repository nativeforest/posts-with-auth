import axios from "axios";

export const axiosWithAppID = axios.create({
  headers: {
    'app-id' : `6337bab035433880ee61eb87`
    }
  }
);