import React from 'react';
import iconSvg from '../icons/normalized/dumbbell.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dumbbell" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender