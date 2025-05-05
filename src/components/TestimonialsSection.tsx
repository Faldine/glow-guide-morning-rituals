
import React from "react";

const testimonials = [
  {
    name: "Sophie M.",
    role: "29 ans, Peau mixte",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
    quote: "GlowGuide a complètement transformé mes matins. Ma peau n'a jamais été aussi éclatante et je me sens beaucoup plus énergique tout au long de la journée.",
  },
  {
    name: "Thomas L.",
    role: "34 ans, Peau sensible",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
    quote: "En tant qu'homme, je ne savais pas par où commencer pour prendre soin de ma peau. GlowGuide m'a proposé une routine simple et efficace, adaptée à ma peau sensible.",
  },
  {
    name: "Amina K.",
    role: "26 ans, Peau sèche",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop",
    quote: "J'adore la combinaison de soins et de méditation. La fonction timer est parfaite pour garder le rythme et la playlist rend le tout encore plus agréable !",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-glow-purple/5 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">
          Ce que disent <span className="gradient-text">nos utilisateurs</span>
        </h2>
        <p className="section-subtitle text-center">
          Découvrez comment GlowGuide transforme les routines matinales de personnes comme vous.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-glow-purple/20">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="italic text-glow-gray mb-4">"{testimonial.quote}"</p>
              <h4 className="font-medium">{testimonial.name}</h4>
              <p className="text-sm text-glow-gray">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
