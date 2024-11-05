import { Card } from "antd";
import React from "react";
import { IconList } from "../../common/ShareIcon";

function SliderCard() {
  return (
    <>
      <Card className="p-5 min-h-[665px]">
        <div className="w-full mb-[20px]">
          <h3 className="text-[22px] text-neonDark font-semibold">
            2024: Product Launch & Market Introduction
          </h3>
          <h4 className="text-[20px] font-semibold text-black">Quarter 4</h4>
        </div>
        <div>
          <ul className="list--roadmap">
            <li>
              <IconList className="h-fit min-h-[13px] min-w-[13px] me-[5px]" />
              <p>
                Platform Development: Complete the Ton Mega platform,
                integrating The Open Network (TON) technology with the
                decentralized DePIN ecosystem.
              </p>
            </li>
            <li>
              <IconList className="h-fit min-h-[13px] min-w-[13px] me-[5px]" />
              <p>
                Launch of M3 E-commerce Platform: Deploy M3 – the first
                decentralized e-commerce platform integrated with Web3, enabling
                the trading of resources and payments using cryptocurrency.
              </p>
            </li>
            <li>
              <IconList className="h-fit min-h-[13px] min-w-[13px] me-[5px]" />
              <p>
                Community Building: Kick off community-building activities and
                early user reward programs to generate interest and attract
                users.
              </p>
            </li>
          </ul>
        </div>
      </Card>
    </>
  );
}

export default SliderCard;
