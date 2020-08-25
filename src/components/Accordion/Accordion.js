import React from 'react';
import cx from 'classnames';
import { Accordion as ParticleAccordion } from 'particle-components-react';
import { accordion } from './Accordion.module.scss';
import { Row, Column } from '../Grid';

const Accordion = ({ className, ...rest }) => (
  <Row>
    <Column noGutterSm colLg={8}>
      <ParticleAccordion {...rest} className={cx(className, accordion)} />
    </Column>
  </Row>
);
export default Accordion;
