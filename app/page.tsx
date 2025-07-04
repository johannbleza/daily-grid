import HabitCard from "@/components/habit/HabitCard";

const Home = () => {
  return (
    <div className=" bg-zinc-950 min-h-dvh flex flex-col gap-4 pt-20 items-center sm:items-start p-4 sm:grid grid-cols-2 max-w-[52rem] mx-auto">
      <HabitCard />
      <HabitCard />
    </div>
  );
};

export default Home;
