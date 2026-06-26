// app/about/page.js
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0f1c2e] text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Titre */}
        <h1 className="text-4xl md:text-6xl font-raleway font-extrabold mb-8 text-center">
          À propos de <span className="text-blue-500">RentCar</span>
        </h1>

        {/* Texte introductif */}
        <div className="prose prose-invert prose-lg mx-auto">
          <p className="text-gray-300 leading-relaxed mb-6">
            Fondée en 2026, <strong>RentCar</strong> est née d'une vision simple : rendre la location de véhicules premium accessible, transparente et élégante. Basés au cœur de la Tunisie, nous nous engageons à offrir une expérience de conduite exceptionnelle, que ce soit pour vos voyages d'affaires ou vos escapades touristiques.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-10">
            Notre flotte est rigoureusement sélectionnée pour garantir confort et sécurité. Chaque véhicule est entretenu selon les normes les plus strictes, car nous croyons que chaque kilomètre parcouru doit être un plaisir.
          </p>
        </div>

        {/* Section Valeurs (Grid) */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { title: "Excellence", desc: "Une sélection de véhicules haut de gamme." },
            { title: "Transparence", desc: "Aucun frais caché, une tarification claire." },
            { title: "Proximité", desc: "Un service client disponible 24/7 en Tunisie." }
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-raleway font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}