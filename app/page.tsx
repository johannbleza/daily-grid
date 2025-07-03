import HabitCard from "@/components/habit/HabitCard";

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-dvh flex flex-col gap-4 justify-center items-center p-4">
      <HabitCard color="sky" />
      <HabitCard color="fuchsia" />
      <HabitCard color="rose" />
      <HabitCard color="cyan" />
    </div>
  );
};

export default Home;
