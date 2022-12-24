import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { NavBox } from '~/components/home/NavBox';
import { VideoCard } from '~/components/home/VideoCard';
import { videos } from '~/utils/data';
import navbox from '~/utils/navbox';

export default component$(() => {
  return (
    <div class={`w-full`}>
      <div class="w-full scroller gap-x-4 grid grid-flow-col mt-5 overflow-x-auto">
      {navbox.map((box, i) => (
        <NavBox box={box} Icon={box.icon} key={i} active />
      ))}
      </div>
      <div class="grid desktop:grid-cols-5 xtab:grid-cols-4 ltab:grid-cols-3 five:grid-cols-2 w-full gap-3 mt-4">
        {videos.map((video, i)=>( <VideoCard key={i} video={video} />))}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'NewTube',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
  links: [
    
  ]
};
