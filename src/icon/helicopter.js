import React from 'react';
import iconSvg from '../icons/normalized/helicopter.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__helicopter" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender