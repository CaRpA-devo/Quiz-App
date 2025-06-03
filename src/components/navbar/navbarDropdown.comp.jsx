import "./navbar.style.css";



export function NavbarDRopdown () {


    return (

    <div className="navbar  custom-navbar shadow-sm h-[90px]">
      <div className="flex-1 ">
        <img
          src="img/Quiz-logo.jpg"
          alt="Quiz-Logo"
          className="h-[48px]  rounded-[16px] hover:scale-110"
        />
      </div>

 <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="menu-hover">
                <img
                  src="img/login-dropdown.jpg"
                  alt="Quiz-Logo"
                  className="h-[48px] w-[48px] rounded-[50px] hover:scale-110"
                />
              </summary>
              <ul className="bg-color-ps rounded-t-none  p-6">
                <li>
                  <a>Level</a>
                </li>
                <li>
                  <a>Score</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      
     
    </div>
    )
}