"use client";

import dynamic from "next/dynamic";
import type { ThemeName } from "./list";

type Props = {
  themeName: ThemeName;
};

const LoadTheme = ({ themeName }: Props) => {
  const Theme = dynamic(() => import(`@/themes/${themeName}`), {
    loading: () => <div>Loading theme...</div>,
    ssr: false,
  });

  return <Theme />;
};

export default LoadTheme;
