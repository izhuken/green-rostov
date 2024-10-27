export type RecycleNestedFraction = {
  id: number;
  name: string;
  type: string;
  color: string;
  icon: string;
};

export interface RecyclePoint {
  //   geom: "POINT(39.61598399999999 47.22804399999998)";
  geom: string;
  pointId: number;
  pointType: string;
  address: string;
  title: string;
  restricted: true;
  rating: {
    likes: number;
    dislikes: number;
    score: number;
  };
  fractions: RecycleNestedFraction[];
  businesHoursState: {
    state: "allday";
  };
  numberOfComments: number;
}

export interface RecycleGetResponse {
  isSuccess: boolean;
  data: {
    totalResults: number;
    points: RecyclePoint[];
  };
}
