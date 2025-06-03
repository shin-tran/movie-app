import { networksToInvert } from "@libs/constanst";

const TVShowInfomation = ({ tvInfo }) => {
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{tvInfo.original_name}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        {(tvInfo.origin_country || []).map((countryCode) => (
          <img
            key={countryCode}
            src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
            className="mt-1 mr-1 w-[1.4vw]"
          />
        ))}
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{tvInfo.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Network</p>
        <div className="space-y-4">
          {(tvInfo.networks.slice(0, 5) || []).map((network) => {
            return (
              <img
                className={
                  networksToInvert.includes(network.name) ? "invert" : undefined
                }
                key={network.id}
                src={`https://media.themoviedb.org/t/p/h30${network.logo_path}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TVShowInfomation;
