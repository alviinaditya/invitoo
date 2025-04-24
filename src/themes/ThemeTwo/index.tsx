import ThemeLayout from "@/components/ThemeLayout";

export default function ThemeOne() {
  return (
    <ThemeLayout>
      <ThemeLayout.Aside>
        <div className="bg-blue-200 w-full h-full">ThemeTwo Sidebar</div>
      </ThemeLayout.Aside>
      <ThemeLayout.Main>
        <div className="p-4 bg-purple-400 w-full h-full">
          <h1>Theme Two</h1>
          <p>This is your wedding page.</p>
        </div>
      </ThemeLayout.Main>
    </ThemeLayout>
  );
}
