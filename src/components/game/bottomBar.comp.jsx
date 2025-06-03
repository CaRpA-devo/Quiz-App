import { Button } from "../UI/button/button.comp";
import { useActionData, useNavigate } from 'react-router-dom';

export function BottomBar() {

  const navigate = useNavigate();
  return (
    <>
      {/* TODO Styling und querrys */}
      {/* Bottom Bar */}
      <div className="flex justify-between items-center bar-container w-full px-10 p-4 text-sm text-gray-300">
        <Button text="Quit-Game"
        onClickHandler={()=> navigate("/lobby")}
        className=" h-8 w-30 rounded-full btn-bottom text-2xl overlay z-10 "
                     
                     />
        <div className="flex text-2xl  gap-6">
          <p >
            Scores: <span className="text-white text-2xl font-bold"></span>
          </p>
          <p >
            Timer: <span className="text-pink-400 text-2xl "></span>
          </p>
        </div>
        <div className="flex gap-16">
          
            <img
              className="rounded-2xl lives h-12"
              src="./img/richtig.png"
              alt="Bild vom Quiz mit richtig"
            />
          
          
            <img
              className="rounded-2xl lives h-12"
              src="./img/richtig.png"
              alt="Bild vom quiz mit richtig"
            />
         
         
            <img
              className="rounded-2xl lives  h-12"
              src="./img/richtig.png"
              alt="Bild vom quiz mit richtig"
            />
          
        </div>
      </div>
    </>
  );
}
