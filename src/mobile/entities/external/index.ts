export interface RecycleFraction {
  position: number;
  title: string;
  icon: string;
}

export interface RecycleFractionMap {
  [key: string]: RecycleFraction;
}

export const RecycleFractions: RecycleFractionMap = {
  PaperBottle: {
    position: 32,
    title: "БумБатл",
    icon: require("@/assets/external/paper.png")
  },
  Paper: {
    position: 1,
    title: "Бумага",
    icon: require("@/assets/external/paper.png")
  },
  Plastic: {
    position: 2,
    title: "Пластик",
    icon: require("@/assets/external/bottle.png")
  },
  Glass: {
    position: 3,
    title: "Стекло",
    icon: require("@/assets/external/glass.png")
  },
  Metal: {
    position: 4,
    title: "Металл",
    icon: require("@/assets/external/beam.png")
  },
  TetraPack: {
    position: 5,
    title: "Тетра-пак",
    icon: require("@/assets/external/tetrapack.png")
  },
  Clothes: {
    position: 6,
    title: "Одежда",
    icon: require("@/assets/external/clothers.png")
  },
  Lamps: {
    position: 7,
    title: "Лампочки",
    icon: require("@/assets/external/lamp.png")
  },
  BottleCaps: {
    position: 8,
    title: "Крышечки",
    icon: require("@/assets/external/bottle-cap.png")
  },
  Technic: {
    position: 9,
    title: "Техника",
    icon: require("@/assets/external/techniq.png")
  },
  Battery: {
    position: 10,
    title: "Батарейки",
    icon: require("@/assets/external/battery.png")
  },
  Tyres: {
    position: 11,
    title: "Шины",
    icon: require("@/assets/external/tyre.png")
  },
  Dangerous: {
    position: 12,
    title: "Опасное",
    icon: require("@/assets/external/danger.png")
  },
  Another: {
    position: 13,
    title: "Другое",
    icon: require("@/assets/external/another.png")
  }
};

export * from "./response";
