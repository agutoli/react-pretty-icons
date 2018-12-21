import React from 'react';
import iconSvg from '../icons/normalized/contain-end.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__contain-end" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender