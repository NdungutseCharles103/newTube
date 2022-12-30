import { component$ } from "@builder.io/qwik";
import { Comment } from "./Comment";

export interface CommentsProps {}

export const Comments = component$<CommentsProps>(() => {
	return (
		<div class='flex flex-col text-sm gap-y-4'>
			<span class='font-semibold'>45,067 Comments</span>
			<div class='flex items-center gap-x-3'>
				<img
					class='h-[40px] w-[40px] rounded-full object-cover'
					src='/arg.jpg'
					alt=''
				/>
				<input
					class='bg-transparent w-full border-b-2 p-2 outline-none'
					type='text'
					placeholder='Leave a comment'
				/>
				<button class='bg-ytGray px-4 py-2 rounded-md font-semibold'>
					Post
				</button>
			</div>
            <div class="flex flex-col px-3 gap-y-4">
                <Comment />
                <Comment />
                <Comment />
            </div>
		</div>
	);
});
