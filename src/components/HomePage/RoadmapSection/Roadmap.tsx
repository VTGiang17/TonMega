import { Flex, Typography } from "antd";
import { Slider } from "./Slider";

function Roadmap() {
  return (
    <>
      <Flex vertical className="home__section bg-black">
        <div className="home__section__title ">
          <Typography.Title level={2} className="!m-0 text-center !text-white">
            Roadmap
          </Typography.Title>
          <div className="text-center ">
            <Typography.Text className="!text-white ">
              Explore our roadmap highlighting key milestones, plans and future
              directions.
            </Typography.Text>
          </div>
        </div>
        <div className="home__section__content">
          <Slider />
        </div>
      </Flex>
    </>
  );
}

export default Roadmap;
