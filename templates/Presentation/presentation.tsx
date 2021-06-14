import React from 'react';

import { Button } from '../../lib/components/Button';
import { Text } from '../../lib/components/Text';

import styles from './presentation.module.scss';

const Presentation = () => (
  <section className={styles.Presentation}>
    <Text
      className={styles.Presentation__First}
      data-aos="fade-up"
      data-aos-once="true"
      size="h2"
    >
      I’m a
      <br />
      {' '}
      <span className={styles.Presentation__Highlight}>creative mind</span>
      {' '}
      <br />
      in love with
      {' '}
      <br />
      <span className={styles.Presentation__Highlight}>art direction</span>
      {' '}
      <br />
      and
      {' '}
      <span className={styles.Presentation__Highlight}>
        motion
        {' '}
        <br />
        design.
      </span>
    </Text>

    <Text
      className={styles.Presentation__Second}
      data-aos="fade-up"
      data-aos-once="true"
      size="h4"
    >
      My goal is to communicate
      using beautiful design
      and emotional feelings.
    </Text>

    <Text
      className={styles.Presentation__Third}
      data-aos="fade-up"
      data-aos-once="true"
      size="h5"
    >
      I’m a goosebumps seeker, a true
      gaming-lover, a cinema enthusiast
      and an amateur actor who loves to
      solve problems with storytelling,
      polished design, motion and emotions.
      {' '}
      <br />
      <br />
      Always dreaming of new, unexplored
      horizons to reach, I’m ready for a
      new journey, new stories, your stories.
    </Text>

    <Button
      className={styles.Presentation__Cta}
      data-aos="fade-up"
      data-aos-once="true"
      kind="secondary"
      target="_blank"
      url="/documents/Paolo_Data-Portfolio_2020-Video-Social.pdf"
    >
      My portfolio
    </Button>
  </section>
);

export { Presentation };