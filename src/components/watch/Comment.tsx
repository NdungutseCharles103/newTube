import { component$ } from "@builder.io/qwik";
import { CommentIcon } from "~/integrations/react/icons";

export interface CommentProps {}

export const Comment = component$<CommentProps>(() => {
	return (
		<div class='w-full flex gap-x-2'>
			<img
				class='w-[30px] h-[30px] rounded-full object-cover'
				src='/arg.jpg'
				alt=''
			/>
			<div class='flex flex-col gap-y-2'>
				<div class='flex items-center gap-x-3 font-semibold'>
					<span>Theoreticals</span>
					<span class='opacity-70'>3 Days ago</span>
				</div>
				<span class='font-[500]'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore
					est a non, consequatur reprehenderit provident fugit soluta ullam illo
					ipsam culpa, blanditiis pariatur, rem magni consequuntur quos
					voluptates. Vitae.
				</span>
				<div class='flex items-center gap-x-2 text-xs font-semibold'>
					<button class=' p-2  rounded-md gap-x-2 flex'>
						<span>❤️😂😥</span>
						<span>568</span>
					</button>
					<span class='h-1/2 w-[1px] bg-black/30'></span>
					<button class='p-2 rounded-md gap-x-2 flex items-center'>
                        <CommentIcon size={20} />
						<span>56</span>
					</button>
				</div>
			</div>
		</div>
	);
});
