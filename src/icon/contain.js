import React from 'react';
import iconSvg from '../icons/normalized/contain.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__contain" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender