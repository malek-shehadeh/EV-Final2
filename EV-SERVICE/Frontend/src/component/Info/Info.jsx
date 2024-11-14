import { intro } from "../../constants";
import carImage from "../../assets/download (1).png";
const Info = () => {
  return (
    <section className="p-5 dark:bg-slate-700 md:p-16 ">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 rounded-md bg-slate-300 p-5 dark:bg-slate-800 sm:flex-row ">
        <div className="flex flex-1 flex-col gap-5 ">
          <h1 className="text-2xl font-bold dark:text-slate-300 sm:text-3xl ">
            {intro.title}
          </h1>
          <p className="dark:text-slate-400">{intro.description}</p>
        </div>
        <img
          src={carImage}
          alt="car image"
          className="w-60 h-auto md:flex-1 "
        />
      </div>
    </section>
  );
};

export default Info;
