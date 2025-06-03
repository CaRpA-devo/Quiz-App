

import { NavbarDRopdown } from "../navbar/navbarDropdown.comp";
import { Description } from "./description.comp";
import { SelectedGame } from "./selectedGame.comp";

import { Footer } from './../footer/footer.comp.jsx';

export function Lobby({user}) {
    return (
<>

<NavbarDRopdown />
<Description user={user}/>
<SelectedGame/>
<Footer/>
</>
 



    )
}