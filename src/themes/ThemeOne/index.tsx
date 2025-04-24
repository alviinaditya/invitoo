import ThemeLayout from "@/components/ThemeLayout";

export default function ThemeOne() {
  return (
    <ThemeLayout>
      <ThemeLayout.Aside>
        <div className="bg-pink-200 w-full h-full">ThemeOne Sidebar</div>
      </ThemeLayout.Aside>
      <ThemeLayout.Main>
        <div className="p-4 bg-amber-400 w-full h-full">
          <h1>Theme One</h1>
          <p>This is your wedding page.</p>
        </div>
      </ThemeLayout.Main>
    </ThemeLayout>
  );
}
