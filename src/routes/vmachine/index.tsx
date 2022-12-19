import { component$, useStore } from "@builder.io/qwik";
import { CardBox, ListTask, ListTaskItem, Input } from "./vmachine.css";

export default component$(() => {
  const state: { src: string; list: any[] } = useStore({
    src: "",
    list: [],
  });

  return (
    <>
      <p>Resumability Machine</p>
      <CardBox>
        <Input
          type="text"
          placeholder="Apunta algo..."
          value={state.src}
          onKeyPress$={(ev) => {
            if (ev.key.toLowerCase() === "enter") {
              state.list.push({ value: state.src, mark: false });
              state.src = "";
            }
          }}
          onInput$={(ev) => (state.src = (ev.target as HTMLInputElement).value)}
        />

        <ListTask>
          <MapperLi state={state} />
        </ListTask>
      </CardBox>
    </>
  );
});

export const MapperLi = (props: { state: any }) => {
  return props.state.list.map((row: any, i: number) => (
    <ListTaskItem
      onClick$={() => {
        props.state.list[i].mark = !row.mark;
        console.log(props.state.list[i].mark);
      }}
    >
      {" "}
      {props.state.list[i].mark ? "🐤" : "😎"} {row.value}
    </ListTaskItem>
  ));
};
