import { Flex, Typography } from "antd";
import OurTeamCard from "./OurTeamCard";

function OurTeam() {
  return (
    <>
      <Flex vertical className="home__section ">
        <div className="home__section__title ">
          <Typography.Title
            level={2}
            className="!m-0 text-center !text-neonDark"
          >
            Our Team
          </Typography.Title>
          <div className="text-center ">
            <Typography.Text className="!text-greyMain ">
              Meet the visionaries behind our Project.
            </Typography.Text>
          </div>
        </div>
        <div className="home__section__content">
          <div className="w-full flex flex-col justify-center items-center xl:flex-row">
            <OurTeamCard
              name="Cao Thi B"
              job="CEO"
              img="https://s3-alpha-sig.figma.com/img/d254/38fd/457ff735e8b2a9150779598eb02577e8?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6FUCr1p0JKVPqTtqDCZtnjIDjsPB8hzEWzMtDUBaIKqpUuwyZX8YuM7Yqca9Wyv6H4YUHEDaSaMoFB4ZbMMIKd~vVpWoNjoE-s68qDkx1idV733oXwRvrxtBfXaVbfmRUFfM6PhjakTxUdzhSMQsMDJh8VMMRUWmi58u~Z2UCPoqlQM9N33UvAZ-MFMcQ~Xic2~rt6GOMqXmAFNHSRhnPj7I~AyR3fH9XrmOBjvsrBgZ1KBXkwKwAk62xjIkxyYjtqkpHhwOE58pcaJf-qDq~IEWMfUrGf4TjeYsWA~FJTniE8qjCJTh0uDad4CumVy~8v0WfnOR4pqYQ8t9Z0ZKA__"
            />
            <OurTeamCard
              name="Cao Thi B"
              job="CEO"
              img="https://s3-alpha-sig.figma.com/img/d254/38fd/457ff735e8b2a9150779598eb02577e8?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6FUCr1p0JKVPqTtqDCZtnjIDjsPB8hzEWzMtDUBaIKqpUuwyZX8YuM7Yqca9Wyv6H4YUHEDaSaMoFB4ZbMMIKd~vVpWoNjoE-s68qDkx1idV733oXwRvrxtBfXaVbfmRUFfM6PhjakTxUdzhSMQsMDJh8VMMRUWmi58u~Z2UCPoqlQM9N33UvAZ-MFMcQ~Xic2~rt6GOMqXmAFNHSRhnPj7I~AyR3fH9XrmOBjvsrBgZ1KBXkwKwAk62xjIkxyYjtqkpHhwOE58pcaJf-qDq~IEWMfUrGf4TjeYsWA~FJTniE8qjCJTh0uDad4CumVy~8v0WfnOR4pqYQ8t9Z0ZKA__"
            />
            <OurTeamCard
              name="Cao Thi B"
              job="CEO"
              img="https://s3-alpha-sig.figma.com/img/d254/38fd/457ff735e8b2a9150779598eb02577e8?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6FUCr1p0JKVPqTtqDCZtnjIDjsPB8hzEWzMtDUBaIKqpUuwyZX8YuM7Yqca9Wyv6H4YUHEDaSaMoFB4ZbMMIKd~vVpWoNjoE-s68qDkx1idV733oXwRvrxtBfXaVbfmRUFfM6PhjakTxUdzhSMQsMDJh8VMMRUWmi58u~Z2UCPoqlQM9N33UvAZ-MFMcQ~Xic2~rt6GOMqXmAFNHSRhnPj7I~AyR3fH9XrmOBjvsrBgZ1KBXkwKwAk62xjIkxyYjtqkpHhwOE58pcaJf-qDq~IEWMfUrGf4TjeYsWA~FJTniE8qjCJTh0uDad4CumVy~8v0WfnOR4pqYQ8t9Z0ZKA__"
            />
          </div>
        </div>
      </Flex>
    </>
  );
}

export default OurTeam;
