import dynamic from "next/dynamic";
import type { ThemeName } from "./list";

export const loadThemeComponent = (themeName: ThemeName) => {
  return dynamic(() => import(`@/themes/${themeName}`), {
    loading: () => <div>Loading theme...</div>,
  });
};
