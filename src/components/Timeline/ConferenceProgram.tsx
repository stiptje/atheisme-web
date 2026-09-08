import React from 'react';
import { useLang } from '../../context/LanguageContext';

const sessions = [
  {
    date: ['Mercredi 26 mai 2027 — Après-midi', 'Wednesday 26 May 2027 — Afternoon'],
    title: 'Diagnostic général sur la question de l’athéisme en philosophie et théologie',
    chair: 'Stipe Odak',
    slots: [
      ['14:00–14:30', 'Stipe Odak', 'Introduction générale du colloque'],
      ['14:30–15:00', 'Jean Grondin', 'Titre à préciser', 'Sous réserve — participation à confirmer'],
      ['15:00–15:30', 'Thierry-Dominique Humbrecht', 'Titre à préciser'],
      ['15:30–15:45', 'Pause'],
      ['15:45–16:15', 'Robert Cheaib', 'Imagination et athéisme'],
      ['16:15–17:00', 'Table ronde d’ouverture, animée par Stipe Odak', 'Avec Jean Grondin, Thierry-Dominique Humbrecht et Robert Cheaib'],
      ['17:00–17:30', 'Discussion / questions-réponses avec le public autour des trois interventions et de la table ronde'],
      ['17:30', 'Cocktail apéritif'],
    ],
  },
  {
    date: ['Jeudi 27 mai 2027 — Matin', 'Thursday 27 May 2027 — Morning'],
    title: 'Henri de Lubac pour penser l’athéisme aujourd’hui',
    chair: 'Louis De Brouwer',
    slots: [
      ['09:30–10:00', 'Accueil café'],
      ['10:00–10:30', 'Damien Chomette', 'Le « drame » de l’humanisme athée chez Henri de Lubac : enjeux historiographiques d’un malentendu persistant'],
      ['10:30–11:00', 'Emmanuel Gabellieri', 'L’athéisme rend-il illusoire le désir naturel de Dieu ? Lubac et Proudhon', 'Intervention en dialogue avec Damien Chomette'],
      ['11:00–11:30', 'Discussion — réactions des participants et questions du public'],
      ['11:30–12:00', 'Marie-Gabrielle Lemaire', 'Athéisme et théologie : une « épreuve de force » ?'],
      ['12:00–12:30', 'Étienne Grenet', 'Intervention en dialogue avec Marie-Gabrielle Lemaire'],
      ['12:30–13:00', 'Discussion — réactions des participants et questions du public'],
      ['13:00–14:00', 'Lunch'],
    ],
  },
  {
    date: ['Jeudi 27 mai 2027 — Après-midi', 'Thursday 27 May 2027 — Afternoon'],
    title: 'Athéisme, religions et sociétés : perspectives monothéistes et contemporaines',
    chair: 'Aurélien Chukurian',
    slots: [
      ['14:00–14:30', 'David Lemler', 'Titre à préciser', 'Perspective juive sur l’athéisme.'],
      ['14:30–15:00', 'Bénédicte Bouillot', 'Ni déréliction, ni hubris prométhéenne : la liberté chrétienne, kénotique, pour penser l’humain comme synthèse de fini et d’infini'],
      ['15:00–15:30', 'Grégory Vandamme', 'L’impossible athéisme ? Dieu et la théophanie des croyances chez Ibn ʿArabī'],
      ['15:30–16:00', 'Discussion — réactions des participants et questions du public'],
      ['16:00–16:15', 'Pause'],
      ['16:15–16:45', 'Ivan Broisson', 'Sommes-nous des nietzschéens anonymes ? Incroyance et vérité dans la culture'],
      ['16:45–17:15', 'Thomas Remy', 'De la reconnaissance conciliaire à l’effacement théologique ? Le devenir de l’athéisme dans la théologie catholique francophone après Vatican II'],
      ['17:15–17:45', 'Discussion conclusive de la journée — réactions des participants et questions du public'],
    ],
  },
  {
    date: ['Vendredi 28 mai 2027 — Matin', 'Friday 28 May 2027 — Morning'],
    title: 'Sciences, foi, athéisme',
    chair: 'Benoît Bourgine',
    slots: [
      ['09:30–10:00', 'Accueil café'],
      ['10:00–10:30', 'Aurélien Chukurian', 'L’athéisme : perspectives pascaliennes'],
      ['10:30–11:00', 'Louis De Brouwer', 'Titre à préciser'],
      ['11:00–11:30', 'Discussion — réactions des participants et questions du public'],
      ['11:30–11:45', 'Pause'],
      ['11:45–12:15', 'Thierry Magnin', 'Titre à préciser'],
      ['12:15–12:45', 'Olivier Riaudel', 'L’intérêt de la logique formelle dans le dialogue entre science et foi'],
      ['12:45–13:15', 'Discussion finale — réactions des participants et questions du public'],
      ['13:15–13:45', 'Benoît Bourgine', 'Mot de clôture'],
    ],
  },
];

const presentations = [
  ['Marie-Gabrielle Lemaire', 'Athéisme et théologie : une « épreuve de force » ?', 'Pris à la gorge par la montée de l’athéisme, Henri de Lubac s’est saisi des responsabilités doctrinales et spirituelles qu’elle impose au théologien. Sa trilogie « dialogue, affrontement, combat » a fait l’objet d’incompréhensions et de critiques qui demeurent vives. Peut-elle encore nous éclairer aujourd’hui ?'],
  ['Ivan Broisson', 'Sommes-nous des nietzschéens anonymes ? Incroyance et vérité dans la culture', 'Au-delà même de la négation de Dieu, les philosophies athées qui se situent dans le sillage de Nietzsche nous ont légué un certain rapport à la vérité. On peut l’observer, à titre d’exemple, dans plusieurs travaux récents en histoire de l’Église marqués par une approche généalogique du discours. Étudier de tels présupposés philosophiques est un premier pas vers une réponse théologique à l’incroyance.'],
  ['Fr. Damien Chomette', 'Le « drame » de l’humanisme athée chez Henri de Lubac : enjeux historiographiques d’un malentendu persistant.', 'Une relecture du débat entre Maurice Merleau-Ponty et Henri de Lubac révèle que le projet réel des deux auteurs est souvent négligé, permettant de faire émerger une question commune : quel avenir demeure possible pour la philosophie après les remises en cause de l’humanisme moderne ? Il en ressort que l’interprétation historique proposée par Lubac ne constitue pas seulement une critique de l’athéisme souvent jugée trop théologique ou dépassée. Elle opère surtout un déplacement de perspective et conduit à réinterroger plusieurs orientations de la philosophie française d’après-guerre sur le rapport entre pensée de l’homme et horizon athée.'],
  ['Emmanuel Gabellieri', 'L’athéisme rend-il illusoire le désir naturel de Dieu ? Lubac et Proudhon', 'Si Lubac a « dramatisé » l’athéisme moderne autant qu’on le dit parfois, comment comprendre qu’il ait fait de Proudhon une lecture qui, à l’inverse, a souvent été jugée excessivement positive ?'],
  ['Robert Cheaib', 'Imagination et athéisme', 'L’athéisme constitue un phénomène complexe qui ne saurait être appréhendé à partir des seules opérations de la raison discursive. L’adhésion comme le refus mobilisent également des dimensions plus profondes de l’expérience humaine, qu’elles soient prérationnelles ou métarationnelles. Cette communication se propose d’examiner le rôle de l’imagination dans les processus d’affirmation et de négation de Dieu.'],
  ['Bénédicte Bouillot', 'Ni déréliction, ni hubris prométhéenne : la liberté chrétienne, kénotique, pour penser l’humain comme synthèse de fini et d’infini', 'Penser l’homme comme « passant l’homme », revient à l’envisager comme synthèse paradoxale de fini et d’infini, de temporel et d’éternel. La difficulté est d’articuler ces deux pôles sans amoindrir l’un ou l’autre : ni enfermer l’homme dans une finitude close, où la mort est l’horizon ultime, ni rabattre son « infinité » sur une logique de pure auto-détermination prométhéenne, trans-humaniste – les illusions contemporaines de toute-puissance, alimentées par le développement technique. La proposition chrétienne, fondée sur le mystère pascal, pense au contraire l’homme comme appelé à la divinisation dans une dépendance radicale à l’être infini, selon une liberté relationnelle et responsive, où la finitude assumée est le lieu d’une ouverture potentiellement infinie à la vie et à la liberté mêmes de Dieu.'],
  ['Grégory Vandamme', 'L’impossible athéisme ? Dieu et la théophanie des croyances chez Ibn ʿArabī', 'Dans L’athéisme difficile, Étienne Gilson interrogeait la possibilité de fonder philosophiquement la négation de Dieu. Reprise dans la métaphysique d’Ibn ʿArabī (m. 1240), la question se radicalise : Dieu y est le « Réel », la vérité de l’être dont toute chose constitue un lieu de manifestation. Dès lors, si toute croyance détermine ce Réel sous une forme particulière, l’athéisme nie-t-il Dieu lui-même ou seulement ce qu’Ibn ʿArabī nomme « le Dieu créé dans les croyances » ? Cette communication examinera ainsi le déplacement de la difficulté philosophique de l’athéisme vers son impossibilité ontologique.'],
  ['Olivier Riaudel', 'L’intérêt de la logique formelle dans le dialogue entre science et foi', 'Qu’est-ce que parler de « Dieu » ? Cette question pose en logique celle du statut des noms propres. Alors que Kripke défend la théorie des « désignateurs rigides », selon lesquels les noms propres désignent le même objet dans tous les mondes possibles, Hintikka intègre des modalités épistémiques et doxastiques, liant la référence aux croyances, aux intentions et aux connaissances des agents. Quel intérêt de ces débats dans la distinction des discours ?'],
  ['Aurélien Chukurian', 'L’athéisme : perspectives pascaliennes', 'L’intervention proposera de revenir sur la manière dont Pascal élabore le problème de l’athéisme, et sur la réponse qu’il cherche à lui apporter en régime chrétien. Cet axe pascalien donnera alors matière à une réflexion sur la question de l’athéisme dans la philosophie moderne.'],
];

export default function ConferenceProgram() {
  const { t } = useLang();
  return (
    <div className="conference-program">
      <p className="conference-program__notice">{t('Le colloque se déroulera en français.', 'The conference will be held in French.')}</p>
      <p>{t('Le colloque est ouvert à tous, sans frais de participation, mais l’inscription est requise.', 'The conference is open to all without a participation fee, but registration is required.')}</p>
      <p className="timeline__timezone">{t('Horaire de Bruxelles', 'Brussels time')}</p>
      {sessions.map((session) => (
        <section className="conference-program__session" key={session.date[0]}>
          <h4>{t(session.date[0], session.date[1])}</h4>
          <p className="conference-program__theme" lang="fr">{session.title}</p>
          <p>{t('Présidence', 'Chair')}: <strong>{session.chair}</strong></p>
          <div className="timeline__schedule" lang="fr">
            {session.slots.map(([time, speaker, title, note]) => (
              <div className="timeline__slot" key={time}>
                <span className="timeline__time">{time}</span>
                <div className="timeline__speaker">
                  <strong>{speaker}</strong>
                  {title && <span className="timeline__talk-title">{title}</span>}
                  {note && <span className="conference-program__note">{note}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
      <section className="conference-program__presentations">
        <h4>{t('Titres et brèves présentations des interventions', 'Talk titles and short abstracts')}</h4>
        {presentations.map(([speaker, title, abstract]) => (
          <article className="conference-program__presentation" key={speaker} lang="fr">
            <h5>{speaker}</h5>
            <p className="conference-program__theme">{title}</p>
            <p>{abstract}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
