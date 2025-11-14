import right from "../assets/right.jpg";
import center from "../assets/center.jpg";
import left from "../assets/left.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col gap-6 w-full ">
      <div className="p-5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-gray-700">
          Own Your Style
        </h1>

        <p className="text-lg text-gray-600">
          Discover the latest fashion trends and timeless essentials
          curated.......to help you express your unique style.
        </p>
      </div>
      <div className="flex gap-3 flex-row ">
        <div
          className="w-1/3 h-96 bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: `url(${right})` }}
        ></div>
        <div
          className="w-1/3 h-96 bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: `url(${center})` }}
        ></div>
        <div
          className="w-1/3 h-96 bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: `url(${left})` }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
