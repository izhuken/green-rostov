import { PointStorage, UserAuthClass } from "./store";

export const RootStore = {
  pointStorage: new PointStorage(),
  user: new UserAuthClass()
};
