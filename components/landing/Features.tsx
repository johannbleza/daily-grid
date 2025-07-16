import { features } from "@/lib/constants";

const Features = () => {
  return (
    <section
      className="flex flex-col gap-4 justify-center items-center mt-16 md:py-20 max-w-[52rem] mx-auto"
      id="features"
    >
      <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent">
        Features
      </h1>
      <div className="grid sm:grid-cols-3 gap-4 p-2">
        {features.map(({ name, desc, icon }) => {
          const Icon = icon;
          return (
            <div
              key={name}
              className="bg-transparent border border-zinc-800 rounded-lg px-4 py-12"
            >
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <Icon className="size-10" />
                <h1 className="text-xl font-bold bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent">
                  {name}
                </h1>
                <p className="text-sm text-zinc-400">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
