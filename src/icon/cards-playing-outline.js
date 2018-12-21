import React from 'react';
import iconSvg from '../icons/normalized/cards-playing-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cards-playing-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender