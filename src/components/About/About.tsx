
import React from 'react';
import { useLang } from '../../context/LanguageContext';
import './About.css';

export default function About() {
  const { t } = useLang();

  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__heading">
          {t('À propos du colloque', 'About the Conference')}
        </h2>
        <div className="about__divider" />
        <div className="about__grid">
          <div className="about__text">
            <p>
              {t(
                'Le colloque se propose de dresser une cartographie des formes contemporaines de l\'athéisme, d\'examiner leurs réceptions théologiques et de repérer, au sein de la praxis chrétienne, la diversité des attitudes suscitées par la confrontation à l\'athéisme.',
                'The conference aims to map the contemporary forms of atheism, examine their theological receptions, and identify, within Christian praxis, the diversity of attitudes prompted by the confrontation with atheism.'
              )}
            </p>
            <p>
              {t(
                'Il se veut à la fois diagnostic et proposition\u00A0: diagnostic en établissant un état des lieux théologiques de l\'athéisme aujourd\'hui\u00A0; proposition en ouvrant la voie vers une théologie de l\'athéisme qui ne soit ni polémique, ni complaisante, mais existentielle et rigoureuse.',
                'It is intended to be both a diagnosis and a proposition: a diagnosis by establishing a theological assessment of atheism today; a proposition by paving the way toward a theology of atheism that is neither polemical nor complacent, but existential and rigorous.'
              )}
            </p>
          </div>
          <div className="about__text">
            <p>
              {t(
                'Soixante ans après Vatican\u00A0II, où en est-on de la réponse théologique au défi de l\'athéisme\u00A0? La constitution pastorale Gaudium et spes soulignait que «\u00A0l\'athéisme compte parmi les faits les plus graves de ce temps et doit être soumis à un examen très attentif\u00A0» (§19). Dans le sillage de ce constat, de grandes figures du XX\u1d49 siècle – de Lubac à Rahner, de Balthasar à Jüngel – ont interprété l\'athéisme comme symptôme, comme défi ou même comme ressource pour la théologie.',
                'Sixty years after Vatican\u00A0II, where do we stand on the theological response to the challenge of atheism? The pastoral constitution Gaudium et spes emphasized that "atheism must be accounted among the most serious problems of this time and is deserving of closer examination" (§19). In the wake of this observation, great figures of the 20th century — from de Lubac to Rahner, from Balthasar to Jüngel — interpreted atheism as a symptom, a challenge, or even a resource for theology.'
              )}
            </p>
            <p>
              {t(
                'Mais l\'époque a changé\u00A0: le militantisme athée s\'est affaibli, tandis que se sont affirmées de nouvelles formes de négation de Dieu et d\'indifférence religieuse. Dans ce contexte, il convient de s\'interroger de nouveau\u00A0: que signifie être athée aujourd\'hui\u00A0? Et que signifie être croyant et théologien face à l\'athéisme\u00A0?',
                'But times have changed: atheist activism has weakened, while new forms of the denial of God and religious indifference have emerged. In this context, it is worth asking anew: what does it mean to be an atheist today? And what does it mean to be a believer and a theologian in the face of atheism?'
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
