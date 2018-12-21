import React from 'react';
import iconSvg from '../icons/normalized/panda.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__panda" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender