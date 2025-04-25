import { FaMagnifyingGlass, FaPlay } from "react-icons/fa6";

function App() {
  return (
    <div>
      <header className="flex h-14 items-center justify-between bg-slate-950 px-8 text-white">
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
      <div>
        <p>Inside Out 2</p>
        <div>
          <p>PG13</p>
          <p>2024-06-11</p>
        </div>
        <div>
          <p>Overview</p>
          <p>
            A sequel that features Riley entering puberty and experiencing brand
            new, more complex emotions as a result. As Riley tries to adapt to
            her teenage years, her old emotions try to adapt to the possibility
            of being replaced.
          </p>
          <div>
            <button>
              <FaPlay />
              Trailer
            </button>
            <button>View Detail</button>
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
