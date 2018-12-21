import React from 'react';
import iconSvg from '../icons/normalized/arrow-decision-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-decision-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender