
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const RoutinesShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState("skincare");

  const routines = {
    skincare: {
      title: "Routine de soins",
      description: "Une routine personnalisée adaptée à votre type de peau et à vos besoins spécifiques.",
      steps: [
        { name: "Nettoyant doux", time: "1 min", desc: "Pour éliminer les impuretés" },
        { name: "Sérum à la niacinamide", time: "30 sec", desc: "Pour réduire les pores et l'excès de sébum" },
        { name: "Crème hydratante", time: "1 min", desc: "Non comédogène et légère" },
        { name: "Protection solaire", time: "30 sec", desc: "SPF 50 pour une protection optimale" },
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    morning: {
      title: "Routine matinale",
      description: "Une approche holistique pour démarrer votre journée avec énergie et positivité.",
      steps: [
        { name: "Méditation guidée", time: "5 min", desc: "Pour un esprit calme et centré" },
        { name: "Routine de soins", time: "5 min", desc: "Pour une peau éclatante" },
        { name: "Yoga doux", time: "10 min", desc: "Pour réveiller le corps en douceur" },
        { name: "Affirmations positives", time: "2 min", desc: "Pour un état d'esprit positif" },
      ],
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    },
    self: {
      title: "Développement personnel",
      description: "Prenez soin de votre bien-être mental et émotionnel avec cette routine apaisante.",
      steps: [
        { name: "Journaling", time: "5 min", desc: "Pour exprimer vos pensées et émotions" },
        { name: "Lecture inspirante", time: "10 min", desc: "Pour nourrir votre esprit" },
        { name: "Visualisation", time: "3 min", desc: "Pour définir vos intentions" },
        { name: "Gratitude", time: "2 min", desc: "Pour cultiver la reconnaissance" },
      ],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
  };

  const currentRoutine = routines[activeTab as keyof typeof routines];

  return (
    <section id="routines" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">
          Des routines <span className="gradient-text">adaptées à vos besoins</span>
        </h2>
        <p className="section-subtitle text-center">
          Découvrez nos routines personnalisées qui s'adaptent à votre style de vie, à vos préférences et à vos objectifs de bien-être.
        </p>

        <Tabs defaultValue="skincare" className="w-full" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="skincare" className="text-lg">Soins de la peau</TabsTrigger>
            <TabsTrigger value="morning" className="text-lg">Routine matinale</TabsTrigger>
            <TabsTrigger value="self" className="text-lg">Développement personnel</TabsTrigger>
          </TabsList>
          
          {Object.entries(routines).map(([key, routine]) => (
            <TabsContent key={key} value={key} className="animate-fade-in">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2 order-2 lg:order-1">
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-3">{routine.title}</h3>
                  <p className="text-glow-gray mb-8">{routine.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    {routine.steps.map((step, index) => (
                      <div key={index} className="flex items-start p-4 rounded-xl bg-white shadow-sm border border-glow-purple/10">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-glow-purple/10 flex items-center justify-center text-glow-purple font-medium">
                          {index + 1}
                        </div>
                        <div className="ml-4">
                          <div className="flex items-center">
                            <h4 className="font-medium">{step.name}</h4>
                            <span className="ml-2 px-2 py-0.5 bg-glow-purple/10 text-glow-purple text-xs rounded-full">
                              {step.time}
                            </span>
                          </div>
                          <p className="text-sm text-glow-gray mt-1">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="glow-button">
                    <Play size={18} className="mr-2" /> Essayer cette routine
                  </Button>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                  <div className="p-2 bg-gradient-to-br from-glow-purple to-glow-blue rounded-3xl shadow-xl">
                    <div className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl">
                      <img
                        src={routine.image}
                        alt={routine.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default RoutinesShowcase;
