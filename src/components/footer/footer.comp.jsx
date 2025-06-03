export function Footer (){
return (<>

<footer className="footer footer-horizontal footer-center bg-dark-Quiz text-primary-content p-1 sm:p-2 md:p-4">
  <h3 className="text-xl sm:text-2xl md:text-3xl font-medium">Das Entwickler-Team</h3>
  <nav>
    {/* Hover-Effekt auf die Logos + Responsive Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 ">
      <a href="https://github.com/CaRpA-devo" target="_blank" rel="noopener noreferrer">
        <img
          className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px] transition-transform duration-300 hover:scale-110"
          src="./img/carpa-logo.png"
          alt="Bild von Carpa logo in neon style"
        />
      </a>
      <a href="https://github.com/OuzoPator" target="_blank" rel="noopener noreferrer">
        <img
          className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px] transition-transform duration-300 hover:scale-110"
          src="./img/ROy.jpg"
          alt="Bild von Roylogo in neon style"
        />
      </a>
      <a href="https://github.com/PatKaiUI" target="_blank" rel="noopener noreferrer">
        <img
          className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px] transition-transform duration-300 hover:scale-110"
          src="./img/Kaiser.png"
          alt="Bild von Patkai logo in neon style"
        />
      </a>
      <a href="https://github.com/CagatayWT" target="_blank" rel="noopener noreferrer">
        <img
          className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px] transition-transform duration-300 hover:scale-110"
          src="./img/Willy.jpg"
          alt="Bild von Willy logo in neon style"
        />
      </a>
    </div>
  </nav>

  <aside className=" text-center">
    <p className="font-bold mb-2">
      CaRpa-Studios Industries Ltd.
      <br />
      Providing reliable tech since 2024
    </p>
    <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
  </aside>
</footer>


</>)

}