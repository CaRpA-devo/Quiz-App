import "../lobby/lobbyPage.style.css";

export function LobbyId({ username, room, players = [], ranking = [] }) {
  return (
    <div className=" shadow  positioning">
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Room ID:</strong> {room}</p>

      <div className="mt-2">
        <h3 className="font-semibold">Players:</h3>
        <ul className="list-disc list-inside">
          {players.map((player, i) => (
            <li key={i}>{player}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Ranking:</h3>
        <ol className="list-decimal list-inside">
          {ranking.map((entry, i) => (
            <li key={i}>{entry}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
