import ImageComponent from "@components/Image";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const GENDER_MAPPING = {
  0: "Not set / not specified",
  1: "Famale",
  2: "Male",
  3: "Non-binary",
};

const PeoplePage = () => {
  const peopleInfo = useLoaderData();
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    if (peopleInfo) {
      setIsDataLoading(false);
    }
  }, [peopleInfo]);

  return (
    <>
      <div className="container text-[1.2vw] text-white">
        <div className="flex gap-8">
          <div className="flex-1">
            <ImageComponent
              className={"mb-6"}
              src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${peopleInfo.profile_path}`}
              width={600}
              height={900}
            />
            <div>
              <p className="mb-6 text-[1.3vw] font-bold">Personal Info</p>
              <div className="space-y-4">
                <div>
                  <p className="font-bold">Known For</p>
                  <p>{peopleInfo.known_for_department}</p>
                </div>
                <div>
                  <p className="font-bold">Gender</p>
                  <p>{GENDER_MAPPING[peopleInfo.gender]}</p>
                </div>
                <div>
                  <p className="font-bold">Place of Birth</p>
                  <p>{peopleInfo.place_of_birth}</p>
                </div>
                <div>
                  <p className="font-bold">Birthday</p>
                  <p>{peopleInfo.birthday}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[2]">
            <div className="mb-6">
              <p className="mb-4 text-[1.4vw] font-bold">Biography</p>
              <p className="whitespace-pre-line">{peopleInfo.biography}</p>
            </div>
            <div>
              <RelatedMediaList
                mediaList={peopleInfo.combined_credits?.cast || []}
                isLoading={isDataLoading}
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
