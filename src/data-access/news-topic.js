import { combineUrlParams } from "../utils/common";
import clientUtils from "../utils/client-utils";
import baseAccess from "./base-access";

const api = "/news/v1/topics/611222b7cdfde64db35c9ae4/news";
export default {
  ...baseAccess({ url: api }),
};
