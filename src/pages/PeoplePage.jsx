import ImageComponent from "@components/Image";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import { useLoaderData } from "react-router";

const PeoplePage = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <div className="container text-white">
      <div className="flex-1">
        <ImageComponent
          className={"mb-6"}
          src={
            "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/wx78DnBixam4eXlwVVZs16fWP98.jpg"
          }
          width={600}
          height={900}
        />
        <div>
          <p className="mb-6 text-lg font-bold">Personal Info</p>
          <div className="space-y-4">
            <div>
              <p className="font-bold">Known For</p>
              <p>Acting</p>
            </div>
            <div>
              <p className="font-bold">Gender</p>
              <p>Acting</p>
            </div>
            <div>
              <p className="font-bold">Place of Birth</p>
              <p>Acting</p>
            </div>
            <div>
              <p className="font-bold">Birthday</p>
              <p>Acting</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[2]">
        <p className="mb-6 text-2xl font-bold">Matt Smith</p>
        <div className="mb-6">
          <p className="mb-4 text-lg font-bold">Bio</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            modi nemo odit quo inventore exercitationem itaque illo sit rem
            magni. Animi, maxime repudiandae aut impedit nisi vel atque eius
            deserunt!
          </p>
        </div>
        <div>
          <RelatedMediaList title={"Known For"} />
        </div>
      </div>
    </div>
    </>
  );
};
export default PeoplePage;
