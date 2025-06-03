export function BgLobby({ bgUrl }) {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgUrl})` }} // Dynamisches Bild durch die Prop `imageUrl`
    >
      
    </div>
  );
}