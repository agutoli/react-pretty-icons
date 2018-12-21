import React from 'react';
import iconSvg from '../icons/normalized/radioactive.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__radioactive" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender