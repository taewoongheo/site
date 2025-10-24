interface VideoProps {
  src: string;
}

const Video = ({ src }: VideoProps) => {
  return (
    <video
      src={src}
      controls
      autoPlay
      muted
      className="w-full sm:w-3/4 md:w-1.5/2"
    />
  );
};

export default Video;
