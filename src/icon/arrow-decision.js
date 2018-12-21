import React from 'react';
import iconSvg from '../icons/normalized/arrow-decision.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-decision" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender