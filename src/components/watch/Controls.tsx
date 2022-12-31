import { component$ } from "@builder.io/qwik";
import { CogIcon, PauseIcon } from "~/integrations/react/icons";
import { MUISlider } from "~/integrations/react/mui";

export interface ControlsProps {}

export const Controls = component$<ControlsProps>(() => {
	//   const count = useSignal(0);

	return (
		<div class='player__controls text-white absolute bottom-0 p-3 bg-black/30 w-full opacity-0 flex items-center flex-col duration-300'>
			<div class='flex w-full items-center justify-between'>
				<button class='p-1 bg-blackie rounded-full'>
					<PauseIcon size={30} />
				</button>
				<MUISlider
					className='w-full'
					sx={{
						width: "inherit",
						color: "#ff0000",
						"& .MuiSlider-thumb": {
							display: "flex",
							width: 6,
							height: 6,
						},
					}}
				/>
				<button class='p-2 bg-blackie rounded-full'>
					<CogIcon size={22} />
				</button>
			</div>
		</div>
	);
});
