import { Button, Typography } from "antd";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="w-full p-[20px] flex flex-col justify-between items-center xl:px-[120px] xl:flex-row xl:spy-[24px] bg-neonDark">
        <a href="#" className="text-white text-[14px] hover:underline">
          © 2024 Winners Farm. All rights reserved.
        </a>
        <Button className="btn btn--neon2 !my-[15px] xl:my-0">
          Get Reward
        </Button>
        <Typography.Text className="!text-[14px] text-white">
          District 12, Ho Chi Minh City, Vietnam
        </Typography.Text>
      </footer>
    </>
  );
}

export default Footer;
