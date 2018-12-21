import React from 'react';
import iconSvg from '../icons/normalized/gender-male.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gender-male" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender