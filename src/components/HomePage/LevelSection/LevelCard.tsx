interface IText {
  title?: string;
  title2?: string;
  content?: string;
}

function LevelCard({ title, title2, content }: IText) {
  return (
    <>
      <div className="card">
        <div className="card1">
          <h3 className="text-neonDark font-semibold text-[20px] xl:text-[28px]">
            {title}
          </h3>
          <p className="small text-[14px] text-greyMain font-semibold xl:text-[16px]">
            {title2}
          </p>
          <div className="content mt-[20px] text-[12px] text-greyMain xl:text-[14px]">
            {content}
          </div>
          <div className="go-corner"></div>
        </div>
      </div>
    </>
  );
}

export default LevelCard;
