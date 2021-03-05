import styled from "styled-components";

const Banner = () => {
  return (
    <BannerDiv>
      <BannerH1>conduit</BannerH1>
      <BannerP>A place to share your knowledge</BannerP>
    </BannerDiv>
  );
};

export default Banner;

//styles
const BannerDiv = styled.div`
  background: #5cb85c;
  box-shadow: inset 0 8px 8px -8px rgb(0 0 0 / 30%),
    inset 0 -8px 8px -8px rgb(0 0 0 / 30%);
  color: #fff;
  padding: 0.5rem;
  margin-bottom: 2rem;
`;

const BannerH1 = styled.div`
  font-family: titillium web, sans-serif;
  text-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  font-weight: 700;
  font-size: 3.5rem;
  margin-top: 1rem;
`;

const BannerP = styled.p`
  font-size: 1.5rem;
  margin: 0px 0px 20px 0px;
`;
