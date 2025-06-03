import "./game.style.css";


export function Level({level}){
    return <>
    {/* TODO später useeffect nutzen und das level variable machen */}
    <div className="max-w-md">
       <span className="span-style level-titel ">Level .....{level} </span>

    
    </div>
  
    </>
}