
import React, { useCallback } from 'react';
import { useLang } from '../../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLang();

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
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
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo-mark">a&t</span>
            <p className="footer__tagline">
              {t(
                'Athéisme et théologie aujourd\'hui',
                'Atheism & Theology Today'
              )}
            </p>
          </div>
          <div className="footer__links">
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>{t('Le colloque', 'About')}</a>
            <a href="#timeline" onClick={(e) => handleNavClick(e, '#timeline')}>{t('Programme', 'Program')}</a>
            <a href="#committee" onClick={(e) => handleNavClick(e, '#committee')}>{t('Comité', 'Committee')}</a>
          </div>
        </div>
        <div className="footer__divider" />
        <div className="footer__bottom">
          <p>
            {t(
              '© 2025 Colloque « Athéisme et théologie aujourd\'hui »',
              '© 2025 Conference "Atheism & Theology Today"'
            )}
          </p>
          <p className="footer__institutions">
            UCLouvain · UNamur
          </p>
        </div>
      </div>
    </footer>
  );
}
