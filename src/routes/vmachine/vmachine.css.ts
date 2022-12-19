import { style, styled } from "styled-vanilla-extract/qwik";

export const header = style({});

export const pride = style({});

export const odd = style({});

export const Host = styled.div`
  display: grid;

  align-items: center;
  justify-content: center;
  justify-items: center;
  /* --rotation: 135deg; */
  --rotation: 225deg;
  --size-step: 10px;
  --odd-color-step: 5;
  --even-color-step: 5;
  --center: 12;

  width: 100%;
  height: 500px;

  contain: strict;
`;

export const Range = styled.input`
  width: 100%;
`;

export const Square = styled.div`
  --size: calc(40px + var(--index) * var(--size-step));

  display: block;
  width: var(--size);
  height: var(--size);
  transform: rotateZ(
    calc(var(--rotation) * var(--state) * (var(--center) - var(--index)))
  );
  transition-property: transform, border-color;
  transition-duration: 5s;
  transition-timing-function: ease-in-out;
  grid-area: 1 / 1;
  background: white;
  border-width: 2px;
  border-style: solid;
  border-color: black;
  box-sizing: border-box;
  will-change: transform, border-color;

  contain: strict;

  &${odd} {
    --luminance: calc(
      1 - calc(calc(var(--index) * var(--odd-color-step)) / 256)
    );
    background: rgb(
      calc(172 * var(--luminance)),
      calc(127 * var(--luminance)),
      calc(244 * var(--luminance))
    );
  }

  ${pride} &:nth-child(12n + 1) {
    background: #e70000;
  }
  ${pride} &:nth-child(12n + 3) {
    background: #ff8c00;
  }
  ${pride} &:nth-child(12n + 5) {
    background: #ffef00;
  }
  ${pride} &:nth-child(12n + 7) {
    background: #00811f;
  }
  ${pride} &:nth-child(12n + 9) {
    background: #0044ff;
  }
  ${pride} &:nth-child(12n + 11) {
    background: #760089;
  }
`;

export const CardBox = styled.div`
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
  width: 800px;
  height: 400px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  transition: all ease 110ms;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border-radius: 7px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  border: solid 1px transparent;
  height: 40px;
  width: 100%;
  color: #1a1a1a;
`;

export const ListTask = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
`;

export const ListTaskItem = styled.li``;
