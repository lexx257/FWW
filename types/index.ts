import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type birthday = {
  fullName: string;
  birthday: string;
  age: number;
  daysTillBirthday: number;
};
