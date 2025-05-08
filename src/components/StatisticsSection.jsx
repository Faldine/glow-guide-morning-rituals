
import React from 'react';
import { Award, Clock, ChartBar, Smile } from 'lucide-react';
import '../styles/StatisticsSection.css';

const StatisticsSection = () => {
  const stats = [
    {
      icon: Clock,
      value: "45%",
      label: "Gain de temps",
      description: "Sur votre routine matinale"
    },
    {
      icon: ChartBar,
      value: "87%",
      label: "Efficacité",
      description: "Organisation optimisée des tâches"
    },
    {
      icon: Award,
      value: "98%",
      label: "Satisfaction",
      description: "Des utilisateurs actifs"
    },
    {
      icon: Smile,
      value: "3x",
      label: "Bien-être",
      description: "Amélioration du bien-être quotidien"
    }
  ];

  return (
    <section className="statistics-section">
      <div className="statistics-container">
        <h2 className="statistics-title">
          L'impact <span className="gradient-text">GlowGuide</span>
        </h2>
        <p className="statistics-subtitle">
          Notre application transforme votre quotidien avec des résultats concrets et mesurables.
        </p>

        <div className="statistics-grid">
          {stats.map((stat, index) => (
            <div key={index} className="statistic-card">
              <div className="statistic-icon">
                <stat.icon size={32} />
              </div>
              <h3 className="statistic-value">{stat.value}</h3>
              <h4 className="statistic-label">{stat.label}</h4>
              <p className="statistic-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
