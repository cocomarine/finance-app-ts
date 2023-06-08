// expaning theme setting 

import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }

  // extending tertiary to have a PaletteColor as well
  interface Palette {
    tertiary: PaletteColor;
  }
}

