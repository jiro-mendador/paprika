const VideoBackground = ({
  source,
  className,
}: {
  source: string;
  className: string;
}) => {
  return (
    <video autoPlay loop muted playsInline className={className}>
      <source src={source} type="video/webm" />
    </video>
  );
};

export default VideoBackground;
