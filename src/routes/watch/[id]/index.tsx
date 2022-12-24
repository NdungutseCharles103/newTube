import { component$, useClientEffect$ } from "@builder.io/qwik";
import { Comments } from "~/components/watch/Comments";
import { Player } from "~/components/watch/Player";
import { Similar } from "~/components/watch/Similar";
import {
	BellIcon,
	ChevronDownIcon,
	DotsHorizontalIcon,
	GridAltIcon,
	PlusIcon,
} from "~/integrations/react/icons";
// import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
	// const location = useLocation();

	useClientEffect$(({ track }) => {
		console.log("track", track);
	});

	return (
		<div class='flex w-full p-3'>
			<div class='flex w-full flex-col'>
				<Player />
				<div className='flex w-full flex-col text-sm'>
					<div className='tags flex items-center text-blue-600 font-semibold gap-x-3 text-sm'>
						<span>#BlackPanther</span>
						<span>#Marvel</span>
						<span>#ChandwickBoseman</span>
					</div>
					<span class='text-sm font-semibold mt-3'>
						Watch This Before You See Black panther: Wakanda Forever
					</span>
					<span class='opacity-75 text-sm mt-4'>45,083,432 views</span>
					<div className='flex items-end justify-between w-full font-semibold'>
						<span class='opacity-75 text-sm'>5 Days ago</span>
						<div className='flex items-center gap-x-3'>
							<button class=' bg-ytGray p-2 rounded-md gap-x-2'>
								<span>❤️😂😥</span>
								<span>568K</span>
							</button>
							<button class=' bg-ytGray p-2 rounded-full'>
								<DotsHorizontalIcon size={21} />
							</button>
						</div>
					</div>
				</div>
				<hr class='w-full h-1 bg-black/20 my-4' />
				<div className='flex flex-col w-full'>
					<div className='flex items-center justify-between w-full'>
						<div className='flex items-center gap-x-2'>
							<div className='h-[50px] w-[50px] rounded-full overflow-hidden'>
								<img class='object-cover' src='/arg.jpg' alt='' />
							</div>
							<div className='flex flex-col text-xs font-semibold'>
								<span>Cinema</span>
								<span class='opacity-70'>35M subscribers</span>
							</div>
						</div>
						<button class='px-6 py-2 bg-ytred text-white text-sm rounded-md font-semibold'>Subscribe</button>
					</div>
					<span class='text-sm font-[500] mt-2'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Praesentium impedit deleniti, enim voluptatem dolore reprehenderit
						totam eius eum ea rem culpa? Harum, sequi earum! Harum cupiditate
						nam exercitationem omnis alias?
					</span>
					<button class='text-sm font-bold flex items-center mt-2'>
						Show more
						<ChevronDownIcon className='ml-2' />
					</button>
				</div>
				<hr class='w-full h-1 bg-black/20 my-4' />
				<Comments />
			</div>
			<div class='flex flex-col mx-[1%] gap-2'>
				<button class=' bg-ytGray p-2 rounded-full'>
					<GridAltIcon />
				</button>
				<button class=' bg-ytGray p-2 rounded-full'>
					<PlusIcon />
				</button>
				<button class=' bg-ytGray p-2 rounded-full'>
					<BellIcon />
				</button>
			</div>
			<Similar />
		</div>
	);
});