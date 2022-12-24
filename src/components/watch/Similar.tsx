import { component$ } from "@builder.io/qwik";
import { VideoCard } from "../home/VideoCard";

export const Similar = component$(() => {
	return (
		<div class='flex flex-col max-w-[300px] gap-3 px-2'>
			<h1 class='text-sm'>Similar videos</h1>
			<VideoCard video={{ id: 1 }} />
			<VideoCard video={{ id: 1 }} />
			<VideoCard video={{ id: 1 }} />
		</div>
	);
});
