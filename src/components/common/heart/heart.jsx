import * as styled from "./heartStyles";
import heartlogo from "../heart/heartlogo.png";

const Heart = ({ count, favorited, onClick }) => {
  return (
    <styled.LikeButton onClick={onClick} favorited={favorited}>
      <styled.HeartIcon
        src={heartlogo}
        favorited={favorited}
      ></styled.HeartIcon>
      {count}
    </styled.LikeButton>
  );
};

export default Heart;
