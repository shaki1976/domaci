import axios from "axios";

import { BASE, ALL } from "./Constants.js";

export const getAllCountries = () => axios.get(`${BASE}${ALL}`);
