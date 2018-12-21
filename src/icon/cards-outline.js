import React from 'react';
import iconSvg from '../icons/normalized/cards-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cards-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender