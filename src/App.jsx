import { FaMagnifyingGlass, FaPlay } from "react-icons/fa6";

function App() {
  return (
    <div>
      <header className="flex h-18 items-center justify-between bg-slate-950 px-8 text-white">
        <div className="flex items-center gap-4">
          <img
            src="./netflix-logo.png"
            alt="Netflix Logo"
            className="w-16 sm:w-28"
          />
          <a href="#">Phim</a>
          <a href="#">Truyền hình</a>
        </div>
        <div>
          <FaMagnifyingGlass className="cursor-pointer" />
        </div>
      </header>
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
              <button className="rounded bg-white px-4 py-2 text-[10px] text-black lg:text-lg">
                <FaPlay className="inline-block" />
                Trailer
              </button>
              <button>View Detail</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul>
          <li className="h-0.5 w-4 cursor-pointer bg-slate-600"></li>
          <li className="h-0.5 w-4 cursor-pointer bg-slate-600"></li>
          <li className="h-0.5 w-4 cursor-pointer bg-slate-600"></li>
          <li className="h-0.5 w-4 cursor-pointer bg-slate-600"></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
