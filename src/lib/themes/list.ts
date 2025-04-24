export const themeNames = ["ThemeOne", "ThemeTwo"] as const;

export type ThemeName = (typeof themeNames)[number];
