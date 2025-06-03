import "../lobby/lobbyPage.style.css";



export function Description ({user}) {
return (<>

<div
  className="hero min-h-screen bg-cover bg-center flex justify-center "
  style={{ backgroundImage: 'url(./img/lobby.jpg)' }}
> 

<h1 className="absolute h1-big">
        Lobby
      </h1>

  <div className="hero-content text-center mt-24  ">
    <div className="max-w-md">
      <h1 className="text-6xl ">Wilkommen <span className="span-style">{user.username} </span>, bei Quizzomania!
</h1>
      <h4 className="py-6">
       Wähle nun deinen Spielmodus und teste dein Wissen !
      </h4>
      
    </div>
  </div>
</div>

</>)
}