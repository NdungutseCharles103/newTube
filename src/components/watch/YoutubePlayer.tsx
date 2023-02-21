import { component$ } from "@builder.io/qwik";

type Props = {
  videoId: string;
};

const YouTubePlayer = component$((props: Props) => {
  const { videoId } = props;
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      title="YouTube video player"
      frameBorder="0"
      class=" w-full aspect-video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
});

export default YouTubePlayer;
