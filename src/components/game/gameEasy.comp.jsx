import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "../game/game.style.css";
import { BottomBar } from "./bottomBar.comp";
import { Level } from "./level.comp";
import { LobbyId } from "./lobbyId.comp";
import { QuestionInput } from "./questions.comp";


export function GameEasy () {

const {state} = useLocation();
console.log("STATE in GameEasy:", state)
    return (<>
   


    <div
  className="hero min-h-screen  bg-center "
  style={{ backgroundImage: 'url(./img/Game.jpg)' }}
> 
<LobbyId/>
<Level/>

<QuestionInput state={state}/>

    </div>
    <BottomBar/>
   
    </>)
}