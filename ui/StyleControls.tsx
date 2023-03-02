// Lightmode, darkmode, accent color, etc. controls will eventually go here

function Control() {
  return <p>Lorem</p>;
}

export default function StyleControls() {
  return (
    <div className="flex gap-1">
      <Control />
      <Control />
      <Control />
    </div>
  );
}
