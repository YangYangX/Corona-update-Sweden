/**
 * API: Cards
 */
import axios from "axios";

import { HOST } from "./settings";

export function fetchDataAsync(countryCode) {
  let api;
  switch(countryCode) {
    case "se":
    api = HOST+"/se.json";
    break;
    case "ch":
    api = HOST+"/ch.json";
    break;
    default:
      api = undefined;
      break;
  }
  return axios.get(api);
}
