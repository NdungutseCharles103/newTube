/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  component$,
  useClientEffect$,
  useStore,
  Resource,
  useResource$,
  useTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { NavBox } from "~/components/home/NavBox";
import { isServer } from "@builder.io/qwik/build";
import { fetcRelatedVideos } from "~/utils/fetch";
import navbox from "~/utils/navbox";
import { VideoCard } from "~/components/home/VideoCard";
import { VideoResponse } from "~/utils/types";

export default component$(() => {
  const data$ = useStore({
    videos: [] as VideoResponse["contents"],
  });

  useTask$(async () => {
    // if (isServer) {
    //   const data: VideoResponse = (await fetcRelatedVideos(
    //     "kJQP7kiw5Fk"
    //   )) as VideoResponse;
    //   console.log(data?.contents[0]?.video.author.avatar);
    //   data$.videos = data?.contents;
    // }
  });

  return (
    <div class={`w-full`}>
      <div class="w-full scroller gap-x-2 flex mt-5 overflow-x-auto">
        {navbox.map((box, i) => (
          <NavBox box={box} Icon={box.icon} key={i} active />
        ))}
      </div>
      <div class="grid desktop:grid-cols-5 xtab:grid-cols-4 ltab:grid-cols-3 five:grid-cols-2 w-full gap-3 mt-4">
        {data$.videos?.map((video, i) => (
          <VideoCard key={i} video={video.video} />
        ))}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "NewTube",
  meta: [
    {
      name: "description",
      content: "A video streaming platform like YouTube",
    },
  ],
  links: [],
};
