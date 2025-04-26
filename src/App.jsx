import { FaPlay } from "react-icons/fa6";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="relative text-white">
        <img
          src="https://image.tmdb.org/t/p/original/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg"
          alt=""
          className="aspect-video brightness-50"
        />
        <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
          <p className="mb-2 font-bold sm:text-[2vw]">Inside Out 2</p>
          <div>
            <p className="mb-1 inline-block border border-gray-400 p-1 text-[1.4vw] text-gray-400">
              PG13
            </p>
            <p className="text-[1.2vw]">2024-06-11</p>
          </div>
          <div>
            <div className="mt-4 hidden text-[1.2vw] sm:block">
              <p className="mb-2 font-bold">Overview</p>
              <p>
                A sequel that features Riley entering puberty and experiencing
                brand new, more complex emotions as a result. As Riley tries to
                adapt to her teenage years, her old emotions try to adapt to the
                possibility of being replaced.
              </p>
            </div>
            <div className="mt-4">
              <button className="text-2.5 xl:text-4.5 mr-2 cursor-pointer rounded bg-white px-4 py-2 text-black lg:text-lg">
                <FaPlay className="inline-block" />
                Trailer
              </button>
              <button className="text-2.5 xl:text-4.5 cursor-pointer rounded bg-slate-300/35 px-4 py-2 lg:text-lg">
                View Detail
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-8 xl:right-24 bottom-[10%]">
          <ul className="flex gap-1">
            <li className="h-1 w-6 cursor-pointer xl:w-8 bg-slate-100"></li>
            <li className="h-1 w-6 cursor-pointer xl:w-8 bg-slate-600"></li>
            <li className="h-1 w-6 cursor-pointer xl:w-8 bg-slate-600"></li>
            <li className="h-1 w-6 cursor-pointer xl:w-8 bg-slate-600"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
