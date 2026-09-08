
import React from 'react';
import { useLang } from '../../context/LanguageContext';
import './Timeline.css';
import ConferenceProgram from './ConferenceProgram';

export default function Timeline() {
  const { t } = useLang();

  return (
    <section className="timeline" id="timeline">
      <div className="timeline__container">
        <h2 className="timeline__heading">
          {t('Programme', 'Program')}
        </h2>
        <div className="timeline__divider" />

        <div className="timeline__track">
          {/* Event 1 */}
          <div className="timeline__event" id="event-philosophical">
            <div className="timeline__marker">
              <div className="timeline__dot" />
              <div className="timeline__line" />
            </div>
            <div className="timeline__card">
              <div className="timeline__card-header">
                <span className="timeline__badge timeline__badge--online">
                  {t('En ligne', 'Online')}
                </span>
                <span className="timeline__date">28 {t('avril', 'April')} 2026</span>
              </div>
              <h3 className="timeline__title">
                {t('Après-midi philosophique', 'Philosophical Afternoon')}
              </h3>
              <p className="timeline__summary">
                {t(
                  'L\'événement se déroulera en français, avec traduction en anglais générée par l\'IA.',
                  'The event will be held in French, with AI-generated English translation.'
                )}
              </p>
              <div className="timeline__details">
                <p className="timeline__timezone">
                  {t('Horaire de Bruxelles', 'Brussels time')}
                </p>
                <div className="timeline__schedule">
                  <div className="timeline__slot">
                    <span className="timeline__time">14:00–14:30</span>
                    <span className="timeline__speaker">Henri Laux</span>
                  </div>
                  <div className="timeline__slot">
                    <span className="timeline__time">14:30–15:00</span>
                    <span className="timeline__speaker">Anaïs Delambre</span>
                  </div>
                  <div className="timeline__slot timeline__slot--light">
                    <span className="timeline__time">15:00–15:20</span>
                    <span className="timeline__speaker">{t('Discussion', 'Discussion')}</span>
                  </div>
                  <div className="timeline__slot timeline__slot--light">
                    <span className="timeline__time">15:20–15:30</span>
                    <span className="timeline__speaker">{t('Pause', 'Break')}</span>
                  </div>
                  <div className="timeline__slot">
                    <span className="timeline__time">15:30–16:00</span>
                    <span className="timeline__speaker">Thomas Remy</span>
                  </div>
                  <div className="timeline__slot">
                    <span className="timeline__time">16:00–16:30</span>
                    <span className="timeline__speaker">Aurélien Chukurian</span>
                  </div>
                  <div className="timeline__slot timeline__slot--light">
                    <span className="timeline__time">16:30–17:30</span>
                    <span className="timeline__speaker">{t('Discussion', 'Discussion')}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="timeline__event" id="event-theological">
            <div className="timeline__marker">
              <div className="timeline__dot" />
              <div className="timeline__line" />
            </div>
            <div className="timeline__card">
              <div className="timeline__card-header">
                <span className="timeline__badge timeline__badge--online">
                  {t('En ligne', 'Online')}
                </span>
                <span className="timeline__date">1{t('er', '')} {t('octobre', 'October')} 2026</span>
              </div>
              <h3 className="timeline__title">
                {t("Après-midi d'étude théologique", 'Theological Study Afternoon')}
              </h3>
              <p className="timeline__summary">
                {t(
                  'L\'événement se déroulera en anglais, avec traduction en français générée par l\'IA.',
                  'The event will be held in English, with AI-generated French translation.'
                )}
              </p>
              <div className="timeline__details">
                <p className="timeline__timezone">
                  {t('Horaire de Bruxelles', 'Brussels time')}
                </p>
                <div className="timeline__schedule">
                  <div className="timeline__slot">
                    <span className="timeline__time">16:00–16:45</span>
                    <span className="timeline__speaker">David Bentley Hart<em className="timeline__talk-title" lang="en">Exit, Pursued by Voltaire: Atheism as the Fruit of Christendom</em></span>
                  </div>
                  <div className="timeline__slot">
                    <span className="timeline__time">16:45–17:30</span>
                    <div className="timeline__speaker">Karen Kilby
                      <em className="timeline__talk-title" lang="en">Christian and atheist: thinking about the difference between us.</em>
                      <p className="timeline__abstract" lang="en">Atheist activism has lost much of its vigour, while Christian anxiety about the salvation of non-believers has, in many quarters, died right down. What’s left to wrestle with? In this slightly calmer context it is worth thinking about the difference, or the distance, between believer and unbeliever, between Christian and atheist. Is there a chasm, a radical difference in world-view and life commitment? Or are believer and unbeliever in fact close? Perhaps such questions cannot be answered once and for all, at a general level, but I am interested to try to explore them.</p>
                    </div>
                  </div>
                  <div className="timeline__slot timeline__slot--light">
                    <span className="timeline__time">17:30–17:40</span>
                    <span className="timeline__speaker">{t('Pause', 'Break')}</span>
                  </div>
                  <div className="timeline__slot">
                    <span className="timeline__time">17:40–17:45</span>
                    <span className="timeline__speaker">Stipe Odak — {t('Résumé du débat', 'Summary of the debate')}</span>
                  </div>
                  <div className="timeline__slot timeline__slot--light">
                    <span className="timeline__time">17:45–19:00</span>
                    <span className="timeline__speaker">{t('Discussion', 'Discussion')}</span>
                  </div>
                </div>
                <a
                  href="https://forms.gle/tqvVfDJUkxRP6D8k6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline__cta"
                >
                  {t("S'inscrire à cet événement", 'Register for this event')}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="timeline__event" id="event-conference">
            <div className="timeline__marker">
              <div className="timeline__dot timeline__dot--main" />
            </div>
            <div className="timeline__card timeline__card--highlight">
              <div className="timeline__card-header">
                <span className="timeline__badge timeline__badge--onsite">
                  {t('En présentiel', 'On-site')}
                </span>
                <span className="timeline__date">26–28 {t('mai', 'May')} 2027</span>
              </div>
              <h3 className="timeline__title">
                {t('Colloque international', 'International Conference')}
              </h3>
              <p className="timeline__summary">
                Louvain-la-Neuve, {t('Belgique', 'Belgium')}
              </p>
              <div className="timeline__details">
                <ConferenceProgram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
