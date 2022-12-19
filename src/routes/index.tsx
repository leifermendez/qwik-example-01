import { component$, useStore, $ } from "@builder.io/qwik";
import { Card, Label, ImgWrapper, Info, Img } from "./index.css";

export const MOCK_JSON = [
  {
    id: 1,
    text: "iPhone 14X",
    url: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    text: "iPhone 14",
    url: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default component$(() => {
  return (
    <Card>
      <Info>🚀 Qwik (click sobre la imagen)</Info>
      <Image />
    </Card>
  );
});

export const Text = component$((props: { label: string }) => {
  console.log(`[🤓 Text.component]: renderizando Text`);
  return <Label>{props.label}</Label>;
});

export const Image = component$(() => {
  console.log(`[🐴 Image.component]: renderizando Image`);

  const imgValue = useStore(MOCK_JSON[0]);

  /**
   * 😉 Mostrando ejemplo de separacion de funcion
   * en Qwik
   */
  const logic = $(() => {
    const tkImg = MOCK_JSON.find((o) => o.id !== imgValue.id) as any;
    console.log(``);
    console.log(`[🐤 Image.click]: Evento click `);
    imgValue.id = tkImg.id;
    imgValue.text = tkImg.text;
    imgValue.url = tkImg.url;
  });

  return (
    <ImgWrapper>
      <Img onClick$={logic} src={imgValue.url}></Img>
      <Text label={imgValue.text} />
    </ImgWrapper>
  );
});
