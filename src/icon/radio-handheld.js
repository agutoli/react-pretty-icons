import React from 'react';
import iconSvg from '../icons/normalized/radio-handheld.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__radio-handheld" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender