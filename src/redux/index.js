import { init } from "@rematch/core";
import models from "./models";

const store = init({
  models,
});

const { getState, dispatch } = store;

export { getState, dispatch };
export default store;
