import React from "react";
interface IInf {
  name?: string;
  job?: string;
  img?: string;
}

function OurTeamCard({ name, job, img }: IInf) {
  return (
    <>
      <div className="ourteam--card w-full max-w-sm rounded-lg  py-10 px-[60px] my-[22px] flex flex-col justify-center items-center xl:mx-[22px]">
        <div className="w-[250px] h-[250px] rounded-full shadow-lg overflow-hidden mb-10">
          <img className="w-auto h-auto " src={img} alt="Bonnie image" />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <span className="text-greyMain text-[20px] xl:text-[24px] ">
            {job}
          </span>
          <h4 className="text-neonDark font-semibold text-[24px] text-center xl:text-[28px]">
            {name}
          </h4>
        </div>
      </div>
    </>
  );
}

export default OurTeamCard;
