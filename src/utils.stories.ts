import { RoundedSize, Size, StyleType, Theme } from "./constants";

export const PROPS = {
  styleType: ["solid", "outline", "plain"] as StyleType[],
  size: ["mini", "small", "middle", "large"] as Size[],
  rounded: ["small", "middle", "large", "full"] as RoundedSize[],
  theme: ["primary", "zinc", "red", "green", "amber", "blue"] as Theme[],
}

export const randomNum = (minNum: number, maxNum: number) =>
  parseInt(`${Math.random() * (maxNum - minNum + 1) + minNum}`, 10);

export function random<T>(list: T[]) {
  return list[randomNum(0, list.length - 1)];
}