export default function Video() {
  return <video className="w-full" autoPlay muted controls><source src="/video.mp4" type="video/mp4" />Your browser does not support the video tag.</video>;
}
