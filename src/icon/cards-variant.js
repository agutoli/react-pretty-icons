import React from 'react';
import iconSvg from '../icons/normalized/cards-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cards-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender