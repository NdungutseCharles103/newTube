import { component$, useContext } from "@builder.io/qwik";
import { AppContext } from "~/contexts/AppProvider";
import { VideoCard } from "../home/VideoCard";

export const Similar = component$(() => {
  const { videos } = useContext(AppContext);
  return (
    <div class="flex flex-col max-w-[300px] gap-3 px-2">
      <h1 class="text-sm">Similar videos</h1>
      {videos?.slice(0, 6).map((video, i) => (
        <VideoCard key={i} video={video.video} />
      ))}
    </div>
  );
});
