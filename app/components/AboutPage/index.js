/**
*
* AboutPage
*
*/

import React from 'react';

import SimpleNavbar from 'components/SimpleNavbar';

import styles from './styles.css';

function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <SimpleNavbar title="Sobre" />
      <h3>Criado por Luandro Vieira</h3>
      <p>Sistema de gerenciamento de estoque e comandas para a Tabacaria Saraiva em Viçosa, Minas Gerais</p>
    </div>
  );
}

export default AboutPage;
