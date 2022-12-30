import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { useApp } from "~/contexts/AppProvider";
import {
	BellIcon,
	ChevronDownIcon,
	GridAltIcon,
	MicrophoneIcon,
	PlusIcon,
	SearchIcon,
	UserIcon,
} from "~/integrations/react/icons";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.css?inline";

export default component$(() => {
	useStylesScoped$(styles);
	const { isDark } = useApp();

	return (
		<header>
			<div
				class={` w-full flex items-center justify-between p-4 ${
					isDark ? " bg-blackie text-white" : "bg-whitish"
				}`}
			>
				<Link href='/' title='qwik'>
					<QwikLogo />
				</Link>
				<div
					class={`flex w-1/2 max-w-[500px] items-center ${
						isDark ? " bg-darkb text-white" : "bg-trueWhite"
					} p-2 py-1 rounded-md gap-x-2`}
				>
					<SearchIcon />
					<input
						placeholder='Search here...'
						type='text'
						class=' bg-transparent outline-none border-none w-full text-lg'
					/>
					<MicrophoneIcon />
				</div>
				<div class=' flex items-center gap-x-2'>
					<button class={`${isDark?' bg-darkb text-white':'bg-ytGray'} p-2 rounded-full`}>
						<GridAltIcon />
					</button>
					<button class={`${isDark?' bg-darkb text-white':'bg-ytGray'} p-2 rounded-full`}>
						<PlusIcon />
					</button>
					<button class={`${isDark?' bg-darkb text-white':'bg-ytGray'} p-2 rounded-full`}>
						<BellIcon />
					</button>
					<div class=' flex items-center relative cursor-pointer'>
						<button class={`${isDark?' bg-darkb text-white':'bg-ytGray'} p-2 rounded-full`}>
							<UserIcon />
						</button>
						<ChevronDownIcon />
					</div>
				</div>
			</div>
		</header>
	);
});
