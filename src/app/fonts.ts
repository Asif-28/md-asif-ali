import { Poppins } from "next/font/google";

export const Pop = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});
