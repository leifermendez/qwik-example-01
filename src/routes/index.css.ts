import { styled } from "styled-vanilla-extract/qwik";

export const Card = styled.div`
  border: solid 2px transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: white;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  width: 400px;
  height: 400px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  transition: all ease 110ms;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
`;

export const Label = styled.div`
  position: absolute;
  border: solid 2px transparent;
  top: 5px;
  left: 5px;
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 7px;
  transition: all ease 110ms;
`;

export const ImgWrapper = styled.div`
  border: solid 2px transparent;
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;

export const Img = styled.img`
  cursor: pointer;
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Info = styled.div`
  position: absolute;
  z-index: 1;
  top: -25px;
  left: 0px;
  font-size: 0.85rem;
`;
