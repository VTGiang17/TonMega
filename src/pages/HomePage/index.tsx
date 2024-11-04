import { Button, Flex, Typography } from "antd";
import { LogoPOS } from "../../components/common/ShareIcon";

function HomePage() {
  return (
    <>
      <Flex className="w-full h-[1027px] relative overflow-hidden">
        <div className="w-full h-screen bg-[url(https://s3-alpha-sig.figma.com/img/5b0a/1f20/f1b050083c04e76d3b2ee9398d6bfc03?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KA1bSwA3pYAKLao-C617nbB9k18vMtSucZ11uV0FBiHBvc-~sFeBtfuBxyEo9RErvAwApqXVBgDRNzMaHOfetrSAng11gctv6Zh0ILTs~LiXo6Iq-9OWZc93Bu~yVKmPp9zB9bw4lvtjUUxibGhllKQDnWtMFkXnCogzOib-Bg6lN1mJ9M58WcNshgtp5JjnJkhZfRoiUsbJk6Zd3HNAWSql9OvBqrvfF9AmnQbRrp5upq5~B2HklSt8XhWqdhK9KDu3zctSWbJD1Cya~LgqNrTm61yk6rUOXweEBr7zafpLLvALhRqtH~OYbM0AFjndgFbniHnwUHB90pckJ2006A__)] bg-cover min-h-full bg-no-repeat bg-bottom"></div>
        <Flex
          vertical
          className="absolute top-[184px] bottom-[40px] left-[120px] right-[120px] justify-center items-center z-50"
        >
          <h1 className="banner-title mb-8 text-center">
            Building a Sustainable Future Empowering Digital Finance
          </h1>
          <div className="w-full max-w-[704px] text-center mb-10">
            <Typography.Text className="text-lg text-white">
              Building a Sustainable Future, Empowering Digital Finance TON Mega
              pioneers an exclusive{" "}
              <span className="font-semibold">PoS mechanism</span>, enabling
              users to stake tokens for transaction validation, building a
              sustainable and energy-efficient{" "}
              <span className="font-semibold">decentralized platform</span>.
            </Typography.Text>
          </div>
          <Flex className="mb-[120px]">
            <Button className="NeonDarkBtn py-4 px-10 h-[52px] justify-center">
              GET REWARD
            </Button>
            <Button className="ms-5 text-base font-semibold bg-black text-white border border-white border-solid py-4 px-10 h-[52px] justify-center">
              READ MORE
            </Button>
          </Flex>
          <Flex
            vertical
            className="rounded-[15px] p-[40px] pos-review justify-center items-center max-w-[1200px]"
          >
            <Flex className="mb-6 w-full">
              <LogoPOS />
              <Typography.Title
                level={4}
                className="ms-8 me-[66px] my-[19px] !font-Poppins !text-white !text-2xl"
              >
                Ton Mega – A Blockchain Platform Powered by Proof of Stake (PoS)
              </Typography.Title>
            </Flex>
            <Typography.Text className="!font-Poppins !text-justify !text-white !text-lg !font-normal">
              Ton Mega leverages the Proof of Stake (PoS) mechanism, providing
              users with secure and energy-efficient transactions. Unlike other
              resource-intensive mechanisms, PoS enables users to contribute to
              the network by holding tokens, allowing them to earn attractive
              staking rewards. With Ton Mega, users not only invest securely but
              also benefit from staking, optimizing their assets in a
              sustainable and efficient way.
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex vertical>
        <h1>afasfasfasfasf</h1>
        <h1>afasfasfasfasf</h1>
        <h1>afasfasfasfasf</h1>
        <h1>afasfasfasfasf</h1>
        <h1>afasfasfasfasf</h1>
        <h1>afasfasfasfasf</h1>

        <h1>afasfasfasfasf</h1>
        <h1>afasfasfasfasf</h1>
        <h1>afasfasfasfasf</h1>
        <h1>afasfasfasfasf</h1>

        <h1>afasfasfasfasf</h1>
        <h1>afasfasfasfasf</h1>
      </Flex>
    </>
  );
}

export default HomePage;
