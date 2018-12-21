import React from 'react';
import iconSvg from '../icons/normalized/step-forward.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__step-forward" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender