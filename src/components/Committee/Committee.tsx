
import React from 'react';
import { useLang } from '../../context/LanguageContext';
import './Committee.css';

interface Member {
  name: string;
  email: string;
  institution: string;
}

const members: Member[] = [
  { name: 'Benoît Bourgine', email: 'benoit.bourgine@uclouvain.be', institution: 'UCLouvain' },
  { name: 'Marie-Gabrielle Lemaire', email: 'marie-gabrielle.lemaire@unamur.be', institution: 'UNamur' },
  { name: 'Aurélien Chukurian', email: 'aurelien.chukurian@uclouvain.be', institution: 'UCLouvain' },
  { name: 'Thomas Remy', email: 'thomas.e.remy@uclouvain.be', institution: 'UCLouvain' },
  { name: 'Ivan Broisson', email: 'ivan.broisson@uclouvain.be', institution: 'UCLouvain' },
  { name: 'Stipe Odak', email: 'stipe.odak@uclouvain.be', institution: 'UCLouvain' },
  { name: 'Régis Burnet', email: 'regis.burnet@uclouvain.be', institution: 'UCLouvain' },
  { name: 'Louis De Brouwer', email: 'louis.debrouwer@uclouvain.be', institution: 'UCLouvain' },
];

export default function Committee() {
  const { t } = useLang();

  return (
    <section className="committee" id="committee">
      <div className="committee__container">
        <h2 className="committee__heading">
          {t("L'équipe organisatrice", 'The Organizing Team')}
        </h2>
        <div className="committee__divider" />
        <ul className="committee__list">
          {members.map((member) => (
            <li key={member.email} className="committee__item">
              <a
                href={`mailto:${member.email}`}
                className="committee__member"
                title={member.email}
              >
                <span className="committee__name">{member.name}</span>
                <span className="committee__inst">{member.institution}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
