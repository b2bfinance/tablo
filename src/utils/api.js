import axios from "axios";
import { getQueryStringFromState } from "./filter";

export const makeProviderURI = (provider, filters) => {
  const filterQuery = getQueryStringFromState(filters);

  if (!provider) {
    return null;
  }

  if (!filterQuery) {
    return provider;
  }

  if (provider.indexOf("?") !== -1) {
    return `${provider}&${filterQuery}`;
  }

  return `${provider}?${filterQuery}`;
};

export const fetchProducts = async provider => await axios.get(provider);
