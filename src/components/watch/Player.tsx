import {
	component$,
	useClientEffect$,
	useRef,
} from "@builder.io/qwik";

export interface PlayerProps {}

export const Player = component$<PlayerProps>(() => {
	const vidEl = useRef<HTMLVideoElement>();

	// function onContextMenuHandler(
	// 	e: QwikMouseEvent<HTMLVideoElement, MouseEvent>,
	// 	el?: any
	// ) {
	// 	console.log(e);
	// 	console.log(el);
	// }

	useClientEffect$(() => {
        
		return () => {
			vidEl.current?.pause();
		};
	});

	return (
		<div class='w-full flex gap-2'>
			<div class=' bg-blackGray flex flex-col relative rounded-lg overflow-hidden aspect-video'>
				<video
					ref={vidEl}
					class='w-full h-full object-contain'
					autoPlay
					controls
					id='video'
					muted
					poster='/arg.jpg'
				>
					<source src='/billie.mp4' />
				</video>
			</div>
		</div>
	);
});
