import React from 'react';
import iconSvg from '../icons/normalized/radio-tower.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__radio-tower" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender