import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0f1c2e] overflow-x-hidden">
      
      <section className="flex flex-col lg:flex-row h-full w-full max-w-7xl mx-auto items-center justify-center pt-24 pb-10">
        
        {/* Left Side — Contenu texte */}
        <div className="w-full lg:w-1/2 px-6 md:px-16 space-y-6 text-center lg:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest border border-blue-500/30">
            Premium Car Rental
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1]">
            Drive in Style, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Arrive in Comfort
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            Découvrez une sélection exclusive de véhicules haut de gamme. 
            Réservation simplifiée et service sur-mesure pour chaque trajet.
          </p>

          <div className="flex justify-center lg:justify-start pt-4">
            <Link href="/cars" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-900/20 transition-all hover:scale-105">
              Réserver maintenant
            </Link>
          </div>
        </div>

        
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 relative flex justify-center items-center px-4">
          
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500/20 blur-[100px] rounded-full"></div>
            <img
              src="/mercedes_PNG80146.png"
              alt="Car rental vehicle"
              className="relative z-10 w-full max-w-sm md:max-w-xl h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
        </div>
      </section>
    </div>
  );
}