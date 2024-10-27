import { RecycleFraction, RecycleGetResponse } from "@/entities";
import axios from "axios";

class RecycleMapIntegration {
  public async getPoints(fractions: RecycleFraction[]) {
    let fractionString = "";

    fractions.forEach(({ position }, index) => {
      if (index === 0 && fractionString.length === 0) {
        return;
      }

      if (index === fractions.length - 1) {
        fractionString += `${position}`;
        return;
      }

      fractionString += `${position},`;
    });

    return axios.get<RecycleGetResponse>(
      "https://recyclemap.ru/api/public/points",
      {
        params: {
          fractions: fractionString,
          bbox: "39.47716096044593,46.79624767808153,40.00238019866666,47.51766483957542",
          size: 10,
          offset: 0
        }
      }
    );
  }
}

export const RecycleMapIntegrationInstance = new RecycleMapIntegration();
