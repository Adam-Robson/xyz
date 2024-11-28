import localFont from "next/font/local";

const karla = localFont({
  src: "./Karla/Karla-VariableFont_wght.ttf",
  variable: "--font-karla",
});

const specialElite = localFont({
  src: "./Special_Elite/SpecialElite-Regular.ttf",
  variable: "--font-special-elite",
});

export { karla, specialElite };
