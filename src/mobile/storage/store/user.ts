import { User } from "@/entities";
import { makeAutoObservable } from "mobx";

export class UserAuthClass {
  public access: string | undefined;
  public refresh: string | undefined;
  public user: User | undefined;

  constructor() {
    makeAutoObservable(this);
  }
}
