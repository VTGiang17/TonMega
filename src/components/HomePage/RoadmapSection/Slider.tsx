// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// @ts-expect-error can ignore this
import "swiper/css";
import { BtnNext, BtnPrev, IconList } from "../../common/ShareIcon";
import { Card, Flex } from "antd";
import { BREAKPOINTS } from "../../../utils/breakpoint";
import { useEffect, useState } from "react";

export const Slider = () => {
  const [screen, setScreen] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setScreen(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () => setScreen(window.innerWidth));
    };
  }, []);
  return (
    <Flex vertical className="w-full">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={24}
        slidesPerView={screen < BREAKPOINTS.xl ? 1 : 3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop
        className="w-full overflow-x-clip"
      >
        <SwiperSlide className="text-white h-auto">
          <Card className="p-5 min-h-[100%]">
            <div className="w-full mb-[20px]">
              <h3 className="text-[22px] text-neonDark font-semibold">
                2024: Product Launch & Market Introduction
              </h3>
              <h4 className="text-[20px] font-semibold text-black">
                Quarter 4
              </h4>
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
                    decentralized e-commerce platform integrated with Web3,
                    enabling the trading of resources and payments using
                    cryptocurrency.
                  </p>
                </li>
                <li>
                  <IconList className="h-fit min-h-[13px] min-w-[13px] me-[5px]" />
                  <p>
                    Community Building: Kick off community-building activities
                    and early user reward programs to generate interest and
                    attract users.
                  </p>
                </li>
              </ul>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="text-white h-auto">
          <Card className="p-5 min-h-[100%]">
            <div className="w-full mb-[20px]">
              <h3 className="text-[22px] text-neonDark font-semibold">
                2025 - Platform Expansion & Exchange Listing
              </h3>
              <h4 className="text-[20px] font-semibold text-black">
                Quarter 1
              </h4>
            </div>
            <div>
              <ul className="list--roadmap">
                <li>
                  <IconList className="h-fit min-h-[13px] min-w-[13px] me-[5px]" />
                  <p>
                    Global Launch: Officially launch the M3 platform to global
                    users.
                  </p>
                </li>
                <li>
                  <IconList className="h-fit min-h-[13px] min-w-[13px] me-[5px]" />
                  <p>
                    Referral & Reward Program: Implement attractive referral
                    rewards to encourage new users and maintain community
                    engagement.
                  </p>
                </li>
                <li>
                  <IconList className="h-fit min-h-[13px] min-w-[13px] me-[5px]" />
                  <p>
                    Marketing Campaign: Execute marketing campaigns and
                    partnerships to enhance platform visibility in the
                    blockchain and e-commerce sectors.
                  </p>
                </li>
                <li>
                  <IconList className="h-fit min-h-[13px] min-w-[13px] me-[5px]" />
                  <p>
                    Listing on MEXC: List the Ton Mega token on the MEXC
                    exchange to expand liquidity and trading capability.
                  </p>
                </li>
                <li>
                  <IconList className="h-fit min-h-[13px] min-w-[13px] me-[5px]" />
                  <p>
                    M3 Platform Upgrades: Add new features such as peer-to-peer
                    (P2P) trading, fiat-crypto conversion, and resource price
                    prediction tools.
                  </p>
                </li>
              </ul>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="text-white h-auto">
          <Card className="p-5 min-h-[100%]">
            <div className="w-full mb-[20px]">
              <h3 className="text-[22px] text-neonDark font-semibold">
                2025 - Platform Expansion & Exchange Listing
              </h3>
              <h4 className="text-[20px] font-semibold text-black">
                Quarter 2 – Quarter 3
              </h4>
            </div>
            <div>
              <ul className="list--roadmap">
                <li>
                  <IconList className="h-fit min-h-[13px] min-w-[13px] me-[5px]" />
                  <p>
                    Integration of DeFi Services: Offer staking, yield farming,
                    and savings products to help users earn profits from their
                    crypto assets.
                  </p>
                </li>
                <li>
                  <IconList className="h-fit min-h-[13px] min-w-[13px] me-[5px]" />
                  <p>
                    Strategic Partnerships: Build partnerships with blockchain
                    projects and DeFi protocols to expand M3's capabilities and
                    attract more users.
                  </p>
                </li>
                <li>
                  <IconList className="h-fit min-h-[13px] min-w-[13px] me-[5px]" />
                  <p>
                    Mobile App Development: Launch mobile applications for iOS
                    and Android to enhance user accessibility and engagement.
                  </p>
                </li>
              </ul>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="text-white h-auto">
          <Card className="p-5 min-h-[100%]">
            <div className="w-full mb-[20px]">
              <h3 className="text-[22px] text-neonDark font-semibold">
                2025 - Platform Expansion & Exchange Listing
              </h3>
              <h4 className="text-[20px] font-semibold text-black">
                Quarter 4
              </h4>
            </div>
            <div>
              <ul className="list--roadmap">
                <li>
                  <IconList className="h-fit min-h-[13px] min-w-[13px] me-[5px]" />
                  <p>
                    NFT Marketplace Launch: Allow users to buy, sell, and trade
                    NFTs on M3, further expanding revenue streams and increasing
                    the platform's utility.
                  </p>
                </li>
              </ul>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="text-white h-auto">
          <Card className="p-5 min-h-[100%]">
            <div className="w-full mb-[20px]">
              <h3 className="text-[22px] text-neonDark font-semibold">
                2026: Global Expansion & System Improvement
              </h3>
              <h4 className="text-[20px] font-semibold text-black">
                Quarter 1 – Quarter 2
              </h4>
            </div>
            <div>
              <ul className="list--roadmap">
                <li>
                  <IconList className="h-fit min-h-[13px] min-w-[13px] me-[5px]" />
                  <p>
                    Multi-Chain Support: Integrate multi-chain support to allow
                    Ton Mega users to interact across various blockchain
                    networks.
                  </p>
                </li>
                <li>
                  <IconList className="h-fit min-h-[13px] min-w-[13px] me-[5px]" />
                  <p>
                    Enterprise Solutions Launch: Introduce enterprise packages
                    on M3, targeting businesses needing supply chain management
                    and resource tracking via blockchain.
                  </p>
                </li>
              </ul>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="text-white h-auto">
          <Card className="p-5 min-h-[100%]">
            <div className="w-full mb-[20px]">
              <h3 className="text-[22px] text-neonDark font-semibold">
                2026: Global Expansion & System Improvement
              </h3>
              <h4 className="text-[20px] font-semibold text-black">
                Quarter 3 – Quarter 4
              </h4>
            </div>
            <div>
              <ul className="list--roadmap">
                <li>
                  <IconList className="h-fit min-h-[13px] min-w-[13px] me-[5px]" />
                  <p>
                    Community Governance: Implement a DAO mechanism, allowing
                    users to vote on updates, new features, and governance
                    decisions.
                  </p>
                </li>
                <li>
                  <IconList className="h-fit min-h-[13px] min-w-[13px] me-[5px]" />
                  <p>
                    Ton Mega 2.0 Upgrade: Enhance Ton Mega and M3, improving
                    transaction speeds, reducing fees, and increasing security.
                  </p>
                </li>
              </ul>
            </div>
          </Card>
        </SwiperSlide>
      </Swiper>
      <Flex className="w-full justify-center items-center ">
        <div className="swiper-button-next m-[12px] flex justify-center items-center p-2 rounded-[50px]  w-[40px] h-[40px] max-w-[52px] max-h-[52px] bg-neonDark xl:w-[52px] xl:h-[52px] ">
          <BtnNext />
        </div>
        <div className="swiper-button-prev m-[12px] flex justify-center items-center p-2 rounded-[50px]  w-[40px] h-[40px] max-w-[52px] max-h-[52px] bg-neonDark xl:w-[52px] xl:h-[52px] ">
          <BtnPrev />
        </div>
      </Flex>
    </Flex>
  );
};
