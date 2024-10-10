import Globe from "@/components/ui/globe";

const Home___Services = () => {
  return (
    <div className="container section mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-semibold text-primary">
            Worldwide Services
          </h2>
          <Globe className="z-10 -mt-10 sm:-mt-20" />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home___Services;
