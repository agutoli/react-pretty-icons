import React from 'react';
import iconSvg from '../icons/normalized/gender-transgender.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gender-transgender" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender