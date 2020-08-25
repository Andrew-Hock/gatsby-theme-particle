import React from 'react';
import { Link as ParticleLink } from 'particle-components-react';
import cx from 'classnames';
import { link } from './Link.module.scss';

const Link = ({ className, ...rest }) => (
  <ParticleLink {...rest} className={cx(className, link)} />
);

export default Link;
