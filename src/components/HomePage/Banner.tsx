import { Button, Flex, Typography } from "antd";
import bannerBg from "../../assets/banner_bg.png";

function Banner() {
  return (
    <>
      <Flex
        className={`bg-black w-full min-h-screen bg-no-repeat bg-cover bg-center`}
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
          <Flex justify="center" className="mt-[35px]">
            <Button className="banner-btn--neon btn">GET REWARD</Button>
            <Button className="banner-btn--black btn">READ MORE</Button>
          </Flex>
        </div>
      </Flex>
    </>
  );
}

export default Banner;
