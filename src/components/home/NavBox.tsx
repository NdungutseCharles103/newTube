import { Component, component$ } from "@builder.io/qwik";
import { QwikifyProps } from "@builder.io/qwik-react";
import { IconBaseProps } from "react-icons";
import { useApp } from "~/contexts/AppProvider";
import { BoxProps } from "~/utils/navbox";

export interface NavBoxProps {
  active: boolean;
  Icon: Component<QwikifyProps<IconBaseProps>>;
  box: BoxProps;
}

export const NavBox = component$<NavBoxProps>((props) => {
  const { active, box } = props;
  const { isDark } = useApp();

  return (
    <div
      class={` flex px-5 py-1 cursor-pointer items-center justify-center a rounded-lg w-fit ${
        isDark
          ? "bg-blackie text-white"
          : `${active ? "bg-ytGray" : " bg-whitish"}`
      } w-fit`}
    >
      <span class={" font-semibold text-sm truncate"}>{box.name}</span>
    </div>
  );
});
