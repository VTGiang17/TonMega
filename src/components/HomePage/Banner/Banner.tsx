import { Flex, Typography } from "antd";
import bannerBg from "../../../assets/banner_bg.png";
import { LogoPOS } from "../../common/ShareIcon";

function Banner() {
  return (
    <>
      <Flex
        vertical
        className={`bg-black w-full min-h-screen bg-no-repeat bg-cover bg-top xl:bg-[length:150%]`}
        style={{
          backgroundImage: `url(${bannerBg})`,
        }}
      >
        <div className="mt-[140px] px-[44px] mx-auto text-center">
          <Typography.Title
            level={1}
            className="!font-semibold !text-[22px] !text-white mb-0 xl:!text-[54px] w-full max-w-[830px] mx-auto"
          >
            Maximize Your Returns <br /> With Smart Coin Investments!
          </Typography.Title>
          <div className="mt-[35px] xl:w-full max-w-[704px] mx-auto">
            <Typography.Text className="!text-white text-center xl:text-[18px]">
              Get 66,888 TonMega for free every month and upgrade to earn more.
              Receive instant commissions when you refer friends to purchase the
              Premium package with 5000 USDT.
            </Typography.Text>
          </div>
          {/*<Flex justify="center" className="mt-[35px]">
            <Button className="banner-btn--black btn">READ MORE</Button>
          </Flex>*/}
        </div>
        <Flex
          vertical
          className="mb-0 p-10 mx-auto mt-auto pos-review max-w-[1200px]  xl:mt-[120px] xl:mb-[40px] xl:rounded-[15px]"
        >
          <Flex className="justify-start xl:mb-[24px]">
            <LogoPOS className="" />
            <div className="flex justify-center items-center ms-[32px]">
              <Typography.Title
                level={3}
                className="!text-[14px] !text-white !font-semibold xl:!text-[28px]"
              >
                Ton Mega – A Blockchain Platform Powered by Proof of Stake (PoS)
              </Typography.Title>
            </div>
          </Flex>
          <div className="text-justify">
            <Typography.Text className="!text-white !text-[12px] xl:!text-[18px]">
              Ton Mega leverages the Proof of Stake (PoS) mechanism, providing
              users with secure and energy-efficient transactions. Unlike other
              resource-intensive mechanisms, PoS enables users to contribute to
              the network by holding tokens, allowing them to earn attractive
              staking rewards. With Ton Mega, users not only invest securely but
              also benefit from staking, optimizing their assets in a
              sustainable and efficient way.
            </Typography.Text>
          </div>
        </Flex>
      </Flex>
    </>
  );
}

export default Banner;
