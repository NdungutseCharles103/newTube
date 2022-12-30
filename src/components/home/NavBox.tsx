import { Component, component$ } from "@builder.io/qwik";
import { QwikifyProps } from "@builder.io/qwik-react";
import { IconBaseProps } from "react-icons";
import { useApp } from "~/contexts/AppProvider";
import { BoxProps } from "~/utils/navbox";

export interface NavBoxProps {
  active: boolean,
  Icon: Component<QwikifyProps<IconBaseProps>>, 
  box: BoxProps,
}

export const NavBox = component$<NavBoxProps>((props) => {
    const { active, Icon, box } = props
    const { isDark } = useApp()

    return (
			<div
				class={` flex flex-col w-[80px] h-[80px] p-3 aspectsquare cursor-pointer items-center justify-center a rounded-lg  ${
					isDark
						? "bg-blackie text-white"
						: `${active ? "bg-ytGray" : " bg-whitish"}`
				} w-fit`}
			>
				<Icon size={26} />
				<span class={" font-semibold text-sm"}>{box.name}</span>
			</div>
		);
});