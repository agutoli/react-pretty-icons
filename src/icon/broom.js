import React from 'react';
import iconSvg from '../icons/normalized/broom.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__broom" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender