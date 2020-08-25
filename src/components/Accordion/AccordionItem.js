import React from 'react';
import cx from 'classnames';
import { AccordionItem as ParticleAccordionItem } from 'particle-components-react';

const AccordionItem = ({ className, children, ...rest }) => (
  <ParticleAccordionItem {...rest} className={cx(className)}>
    {children}
  </ParticleAccordionItem>
);

export default AccordionItem;
