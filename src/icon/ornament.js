import React from 'react';
import iconSvg from '../icons/normalized/ornament.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ornament" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender