import { Flex, Typography } from "antd";
import LevelCard from "./LevelCard";

function LevelReward() {
  return (
    <>
      <Flex vertical className="home__section ">
        <div className="home__section__title ">
          <Typography.Title
            level={2}
            className="!m-0 text-center !text-neonDark"
          >
            Level Reward
          </Typography.Title>
          <div className="text-center ">
            <Typography.Text className="!text-greyMain ">
              Invite friends to buy Premium, get rewards!
            </Typography.Text>
          </div>
        </div>
        <div className="home__section__content">
          <Flex className="w-full flex flex-col justify-center items-center xl:flex-row">
            <LevelCard
              title="F1"
              title2="Directly invite Friends and get 10% commission instantly."
              content="When your friend buys the Premium package for 5000 USDT, you receive 500 USDT."
            />
            <LevelCard
              title="F2"
              title2="Your Friend's invite others earn an extra 5%."
              content="When your F1 friend invites someone else to buy the Premium package, you earn an additional 250 USDT."
            />
            <LevelCard
              title="F3"
              title2="Friends of Friends invite others Continue earning 5%."
              content="For every successful Premium purchase made by someone invited by your F2 friend, you earn another 250 USDT."
            />
            <LevelCard
              title="F4"
              title2="Further levels Earnings 0.1% up to F10."
              content="You keep earning 0.1% from each successful purchase up to F10. For example, if someone at level F10 buys the Premium package, you still get  250 USDT."
            />
          </Flex>
        </div>
      </Flex>
    </>
  );
}

export default LevelReward;
