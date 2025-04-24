import { loadThemeComponent } from "@/lib/themes/load";
import { type ThemeName, themeNames } from "@/lib/themes/list";
import { redirect } from "next/navigation";

interface WeddingData {
  theme: ThemeName;
  title: string;
  date: string;
}

export const generateStaticParams = async () => {
  return [{ slug: ["cewe-cowo"] }, { slug: ["pria-wanita"] }];
};

export default async function Page(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const slug = decodeURI(params.slug.join("/"));
  if (!slug) return;

  const allData: { [key: string]: WeddingData } = {
    "cewe-cowo": {
      theme: "ThemeOne" as ThemeName,
      title: "You're Invited!",
      date: "April 30, 2025",
    },
    "pria-wanita": {
      theme: "ThemeTwo" as ThemeName,
      title: "You're Invited!",
      date: "April 30, 2025",
    },
  };
  const data = allData[slug];
  if (!data) redirect("/");
  const safeTheme = themeNames.includes(data.theme) ? data.theme : "ThemeOne";
  const Theme = loadThemeComponent(safeTheme);
  return <Theme />;
}
