/* eslint-disable @typescript-eslint/no-unused-vars */
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { useApp } from "~/contexts/AppProvider";
import { VideoContent } from "~/utils/types";

export interface VideoCardProps {
  video: VideoContent["video"];
}

export const VideoCard = component$<VideoCardProps>((props) => {
  const { video } = props;
  const { isDark } = useApp();

  return (
    <Link
      href={`/watch/${video.videoId}`}
      class={`${
        isDark ? " bg-blackie text-white" : "bg-whitish"
      } flex flex-col rounded-md hover:scale-110 duration-300 cursor-pointer overflow-hidden max-w-[400px] mx-auto`}
    >
      <img
        class="w-full aspect-video object-cover"
        src={video["thumbnails"] ? video.thumbnails[0]?.url : "/arg.jpg"}
        alt=""
      />
      <div class="flex w-full gap-x-2 p-2">
        <div class="flex w-[65px] h-[50px] rounded-full object-cover overflow-hidden">
          <img
            class="w-full object-cover"
            src={video["thumbnails"] ? video.thumbnails[0]?.url : "/arg.jpg"}
            alt={video.title ?? ""}
          />
        </div>
        <div class="flex flex-col w-full text-sm font-semibold">
          <h2>{video.title}</h2>
          <div class="flex items-center w-full text-gray-500">
            <span class="pr-2">{video?.author?.title}</span>
            <span class="px-2 border-l-2 border-gray-500">
              {video.stats.views} Views
            </span>
          </div>
          <span class="text-xs text-gray-500">{video.publishedTimeText}</span>
        </div>
      </div>
    </Link>
  );
});
