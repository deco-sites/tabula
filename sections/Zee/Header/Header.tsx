import GlobalIsland from "deco-sites/tabula/islands/Zee/Header/GlobalIsland.tsx";
import DepartmentsBar from "deco-sites/tabula/components/Zee/Header/DepartmentsBar.tsx";
import HeaderBar from "deco-sites/tabula/components/Zee/Header/HeaderBar.tsx";
import RewardsBar from "deco-sites/tabula/components/Zee/Header/RewardsBar.tsx";

// started at Aug 4, 23 at 21:51

export default function Header() {
  return (
    <>
      <GlobalIsland />
      <header class="flex flex-col fixed top-0 w-full transition-transform duration-500 translate-y-0 folded-header:lg:-translate-y-7">
        <DepartmentsBar />
        <HeaderBar />
        <RewardsBar />
      </header>
      <div className="h-[1000px]"></div>
    </>
  );
}
