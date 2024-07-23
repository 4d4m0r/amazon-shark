import React from "react";

function HomeContent() {
  return (
    <main className="hero w-full flex lg:flex-row flex-col text-center gap-5 lg:gap-0 justify-center items-center">
      <iframe src="https://www.youtube.com/embed/WncbmE5cNHs?si=p0T_2N_HOiAT4DIa" 
      className="lg:w-4/5 w-full h-80 rounded-md"></iframe>
      <section className="w-full flex lg:items-end items-center flex-col pr-5 gap-5">
        <h2 className="text-4xl font-bold text-primary">Sobre Nós</h2>
        <h3 className="text-xl font-bold text-[#626262]">Ninguém constrói nada grande sozinho</h3>
        <p className="w-96 text-justify text-black font-bold">Acreditamos no potencial dos pequenos negócios. Nossa plataforma ajuda micro e pequenas empresas a encontrarem parceiros, investidores e novos sócios. Com a oportunidade certa, podem alavancar seus negócios e alcançar grandes oceanos.</p>
      </section>
      {/* <section className="w-full">
        <div className="border-2 border-black w-full">
        <h2 className="text-4xl font-bold text-primary">
            Sobre Nós
          </h2>
          <h2 className="text-4xl font-bold text-primary">
            Ninguém constrói nada grande sozinho
          </h2>
        </div>
      </section>
      <div>
      <p className="mt-4 text-lg text-secondary">
            Acreditamos no potencial dos pequenos negócios. Nossa plataforma ajuda
            micro e pequenas empresas a encontrarem parceiros, investidores e
            novos sócios. Com a oportunidade certa, podem alavancar seus
            negócios e alcançar grandes oceanos.
          </p>
      </div> */}
    </main>
  );
}

export default HomeContent;
