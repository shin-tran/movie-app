import FeatureMovies from "./components/FeatureMovies";
import Header from "./components/Header";
import MediaList from "./components/MediaList";
import { TRENDING_TABS } from "./libs/constanst";

function App() {
  return (
    <div>
      <Header />
      <FeatureMovies />
      <MediaList title={"Trending"} tabs={TRENDING_TABS} />
    </div>
  );
}

export default App;
