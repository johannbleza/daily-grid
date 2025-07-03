import HabitCard from "@/components/habit/HabitCard";

const Home = () => {
  return (
    <div className=" bg-zinc-950 min-h-dvh flex flex-col gap-4 pt-22 items-center p-4">
      <HabitCard />
      <HabitCard color="blue" />
    </div>
  );
};

export default Home;
