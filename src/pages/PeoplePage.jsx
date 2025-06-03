import ImageComponent from "@components/Image";
import Loading from "@components/Loading";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import { GENDER_MAPPING } from "@libs/constanst";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const PeoplePage = () => {
  const peopleInfo = useLoaderData();
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    if (peopleInfo) {
      setIsDataLoading(false);
    }
  }, [peopleInfo]);

  if (isDataLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container text-[1.2vw] text-white">
        <div className="flex gap-8">
          <div className="flex-1">
            <ImageComponent
              className={"mb-6"}
              src={
                peopleInfo.profile_path &&
                `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${peopleInfo.profile_path}`
              }
              width={600}
              height={900}
            />
            <div>
              <p className="mb-5 text-[1.6vw] font-bold">Personal Info</p>
              <div className="space-y-4">
                <div>
                  <p className="font-bold">Known For</p>
                  <p>{peopleInfo.known_for_department || "Not set / not specified"}</p>
                </div>
                <div>
                  <p className="font-bold">Gender</p>
                  <p>{GENDER_MAPPING[peopleInfo.gender]}</p>
                </div>
                <div>
                  <p className="font-bold">Place of Birth</p>
                  <p>{peopleInfo.place_of_birth || "Not set / not specified"}</p>
                </div>
                <div>
                  <p className="font-bold">Birthday</p>
                  <p>{peopleInfo.birthday || "Not set / not specified"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[2]">
            <div className="mb-6">
              <p className="mb-4 text-[1.4vw] font-bold">Biography</p>
              <p className="whitespace-pre-line">{peopleInfo.biography || "Not set / not specified"}</p>
            </div>
            <div>
              <RelatedMediaList
                mediaList={peopleInfo.combined_credits?.cast || []}
                title={"Known For"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PeoplePage;
