import styled from "styled-components";
import Router from "next/router";

const CardWrapper = styled.div`
  margin: 8px;
  width: 300px;
  height: 250px;
  padding: 8px;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;

const Cropper = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const Description = styled.div`
  max-height: 60px;
`;

const Divider = styled.div`
  border-top: 2px solid #d1d1d1fc;
  margin: 12px 0;
  width: 100%;
`;

function Card({ item, size = "thumb" }) {
  const description =
    item.description && item.description.length > 100
      ? item.description.slice(0, 100) + "..."
      : item.description;

  return (
    <CardWrapper>
      <Cropper>
        <Image
          src={item.urls[size]}
          alt={item.alt_description}
          onClick={() => {
            Router.push(`/details/${item.id}`);
          }}
        />
      </Cropper>
      <Divider />
      <Description>{description}</Description>
    </CardWrapper>
  );
}
export default Card;
