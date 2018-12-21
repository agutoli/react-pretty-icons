import React from 'react';
import iconSvg from '../icons/normalized/betamax.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__betamax" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender