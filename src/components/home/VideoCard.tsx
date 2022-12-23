/* eslint-disable @typescript-eslint/no-unused-vars */
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface VideoCardProps {
  video: any
}

export const VideoCard = component$<VideoCardProps>((props) => {
    const { video } = props

    return (
    <Link href={`/watch/${video.id}`} class=' bg-whitish flex flex-col rounded-md hover:scale-105 duration-300 cursor-pointer overflow-hidden'>
      <img class='w-full aspect-video object-cover' src="/arg.jpg" alt="" />
      <div class="flex w-full gap-x-2 p-2">
        <div class="flex w-[60px] h-[50px] rounded-full object-cover overflow-hidden">
            <img class='w-full object-cover' src="/arg.jpg" alt="" />
        </div>
        <div class="flex flex-col w-full text-sm font-semibold">
            <h2>Argentine gold!! Fifa Word Cup Winners</h2>
            <div class="flex items-center w-full text-gray-500">
                <span class='pr-2'>Tom Scott</span>
                <span class='px-2 border-l-2 border-gray-500'>12M Views</span>
            </div>
            <span class='text-xs text-gray-500'>2 days ago</span>
        </div>
      </div>
    </Link>
  );
});