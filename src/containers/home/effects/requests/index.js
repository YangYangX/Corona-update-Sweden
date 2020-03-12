/**
 * API: Cards
 */
import axios from "axios";

import { HOST } from "./settings";

export function fetchDataAsync() {
  return axios.get(HOST);
}
