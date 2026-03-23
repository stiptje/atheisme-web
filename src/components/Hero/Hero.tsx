
import React, { useCallback } from 'react';
import { useLang } from '../../context/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLang();

  const handleScrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const navbarHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__badge">
          {t('Colloque international', 'International Conference')}
        </p>
        <h1 className="hero__title">
          {t('Athéisme et théologie', 'Atheism & Theology')}
          <span className="hero__title-accent">
            {t(" aujourd'hui", ' Today')}
          </span>
        </h1>
        <div className="hero__events">
          <a
            href="#event-philosophical"
            className="hero__event-link"
            onClick={(e) => handleScrollTo(e, 'event-philosophical')}
          >
            <span className="hero__event-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
            </span>
            <span className="hero__event-text">
              <span className="hero__event-name">
                {t('Après-midi philosophique', 'Philosophical Afternoon')}
              </span>
              <span className="hero__event-meta">
                28 {t('avril', 'April')} 2026 · {t('en ligne', 'online')}
              </span>
            </span>
            <span className="hero__event-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
          <a
            href="#event-theological"
            className="hero__event-link"
            onClick={(e) => handleScrollTo(e, 'event-theological')}
          >
            <span className="hero__event-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
            </span>
            <span className="hero__event-text">
              <span className="hero__event-name">
                {t("Après-midi d'étude théologique", 'Theological Study Afternoon')}
              </span>
              <span className="hero__event-meta">
                1{t('er', '')} {t('octobre', 'October')} 2026 · {t('en ligne', 'online')}
              </span>
            </span>
            <span className="hero__event-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
          <a
            href="#event-conference"
            className="hero__event-link hero__event-link--highlight"
            onClick={(e) => handleScrollTo(e, 'event-conference')}
          >
            <span className="hero__event-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <span className="hero__event-text">
              <span className="hero__event-name">
                {t('Colloque international en présentiel', 'International On-site Conference')}
              </span>
              <span className="hero__event-meta">
                Louvain-la-Neuve · 26–28 {t('mai', 'May')} 2027
              </span>
            </span>
            <span className="hero__event-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="hero__scroll">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
