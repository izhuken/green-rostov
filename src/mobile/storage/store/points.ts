import { RecyclePoint } from "@/entities";
import { makeAutoObservable } from "mobx";

export class PointStorage {
  public points: RecyclePoint[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addPoints(points: RecyclePoint) {
    this.points.push(points);
  }

  clearPoints() {
    this.points = [];
  }

  init(points: RecyclePoint[]) {
    this.points = points;
  }
}
