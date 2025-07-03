import { ChartSpline, Plus, Wind } from "lucide-react";

const AppBar = () => {
  return (
    <nav className="shadow-xl fixed w-full ">
      <div className="max-w-[40rem] mx-auto text-zinc-400 px-4 py-5 flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <ChartSpline />
          <h1 className="font-bold text-2xl italic">Continuum</h1>
        </div>
        <Plus />
      </div>
    </nav>
  );
};

export default AppBar;
