import { combineUrlParams } from "../utils/common";
import clientUtils from "../utils/client-utils";
import baseAccess from "./base-access";

const api = "/news/v1/medical-news";
export default {
  ...baseAccess({ url: api }),
};
