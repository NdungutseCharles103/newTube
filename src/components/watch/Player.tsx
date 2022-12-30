import { component$, QwikMouseEvent, useClientEffect$, useRef, useStore } from "@builder.io/qwik";

export interface PlayerProps {}

export function onContextMenuHandler(
	e: QwikMouseEvent<HTMLVideoElement, MouseEvent>,
	el?: any
) {
	// console.log(e.);
	console.log(el);
}
export const Player = component$<PlayerProps>(() => {
	const vidEl = useRef<HTMLVideoElement>();
	const playerData = useStore({
		name: "Manu",
		address: {
			address: "",
			city: "",
		},
		orgs: [],
	});

	useClientEffect$(() => {
		playerData.name = "Menu"
		return () => {
			vidEl.current?.pause();
		};
	});

	useClientEffect$(({ track })=> {
		const name = track(()=>	playerData.name);
		console.log(name);
	})

	return (
		<div class='w-full flex gap-2'>
			<div  class=' bg-blackGray flex flex-col relative rounded-lg overflow-hidden aspect-video'>
				<video
					ref={vidEl}
					onTimeUpdate$={(e, el) => {
						console.log(e, el);
					}}
					class='w-full h-full object-contain'
					autoPlay
					controls
					id='video'
					muted
					poster='/arg.jpg'
					onContextMenu$={(e, el) => onContextMenuHandler(e, el)}
				>
					<source src='/billie.mp4' />
				</video>
			</div>
		</div>
	);
});
