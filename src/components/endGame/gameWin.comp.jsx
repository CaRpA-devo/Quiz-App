export function GameWin() {
  return (
    <>
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(./img/winner.jpg)" }}
      >
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">You Win!</h1>
            <h2 className="text-2xl mt-4">User</h2>
            <p className="py-2">Score: 1000 points</p>
            <p className="py-2">Time: 5m38s</p>
          </div>
        </div>
      </div>
    </>
  );
}
