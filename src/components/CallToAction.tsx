
import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-glow-purple/20 to-glow-pink/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-glow-purple/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-glow-pink/20 rounded-full blur-3xl -z-10" />
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Prêt à transformer vos <span className="gradient-text">matins</span> ?
          </h2>
          <p className="text-lg text-glow-gray mb-8 max-w-2xl mx-auto">
            Rejoignez GlowGuide dès aujourd'hui et découvrez une approche personnalisée du bien-être matinal qui combine soins de la peau, méditation et musique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="glow-button text-lg px-8 py-6">Commencer gratuitement</Button>
            <Button variant="outline" className="text-lg px-8 py-6 border-glow-purple text-glow-purple hover:bg-glow-purple/5">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
