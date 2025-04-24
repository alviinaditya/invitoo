import { Children, isValidElement, ReactNode, ReactElement } from "react";

const Aside = ({ children }: { children: ReactNode }) => (
  <aside className="hidden lg:flex md:flex-1">{children}</aside>
);
const Main = ({ children }: { children: ReactNode }) => (
  <main className="w-full md:max-w-[500px] min-h-screen">{children}</main>
);

const ThemeLayout = ({ children }: { children: ReactNode }) => {
  const childArray = Children.toArray(children) as ReactElement[];

  const aside = childArray.find(
    (child) => isValidElement(child) && child.type === Aside
  );

  const main = childArray.find(
    (child) => isValidElement(child) && child.type === Main
  );

  return (
    <div className="flex flex-col md:flex-row justify-center">
      {aside}
      {main}
    </div>
  );
};

ThemeLayout.Aside = Aside;
ThemeLayout.Main = Main;

export default ThemeLayout;
