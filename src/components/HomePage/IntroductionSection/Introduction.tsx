import { Flex, Typography } from "antd";
import React from "react";
import { IconHand, IconMoney, LogoPOS } from "../../common/ShareIcon";

function Introduction() {
  return (
    <>
      <Flex vertical className="home__section">
        <div className="home__section__title ">
          <Typography.Title
            level={2}
            className="!m-0 text-center !text-neonDark"
          >
            Introduction
          </Typography.Title>
          <div className="text-center ">
            <Typography.Text className="!text-greyMain ">
              Explore our uniquely designed UI elements for a seamless web
              experience.
            </Typography.Text>
          </div>
        </div>
        <div className="home__section__content">
          <Flex vertical className="card-item">
            <div className="mb-[20px] xl:mb-[40px]">
              <IconHand style={{ width: 120, height: 120 }} />
              <div>
                <Typography.Text className="!text-base font-semibold text-black">
                  {" "}
                  Ton Mega – A Blockchain Platform Powered by Proof of Stake
                  (PoS)
                </Typography.Text>
              </div>
            </div>
            <div>
              <Typography.Text className="!text-sm text-black">
                Ton Mega offers a cutting-edge blockchain ecosystem with secure,
                transparent transactions, built on The Open Network (TON) and
                powered by the decentralized DePIN network.
              </Typography.Text>
            </div>
          </Flex>
          <Flex vertical className="card-item">
            <div className="mb-[20px] xl:mb-[40px]">
              <LogoPOS style={{ width: 120, height: 120 }} />
              <div>
                <Typography.Text className="!text-base font-semibold text-black">
                  {" "}
                  Ton Mega – A Blockchain Platform Powered by Proof of Stake
                  (PoS)
                </Typography.Text>
              </div>
            </div>
            <div>
              <Typography.Text className="!text-sm text-black">
                Ton Mega offers a cutting-edge blockchain ecosystem with secure,
                transparent transactions, built on The Open Network (TON) and
                powered by the decentralized DePIN network.
              </Typography.Text>
            </div>
          </Flex>
          <Flex vertical className="card-item">
            <div className="mb-[20px] xl:mb-[40px]">
              <IconMoney style={{ width: 120, height: 120 }} />
              <div>
                <Typography.Text className="!text-base font-semibold text-black">
                  {" "}
                  Ton Mega – A Blockchain Platform Powered by Proof of Stake
                  (PoS)
                </Typography.Text>
              </div>
            </div>
            <div>
              <Typography.Text className="!text-sm text-black">
                Ton Mega offers a cutting-edge blockchain ecosystem with secure,
                transparent transactions, built on The Open Network (TON) and
                powered by the decentralized DePIN network.
              </Typography.Text>
            </div>
          </Flex>
        </div>
      </Flex>
    </>
  );
}

export default Introduction;
