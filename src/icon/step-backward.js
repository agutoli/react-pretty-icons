import React from 'react';
import iconSvg from '../icons/normalized/step-backward.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__step-backward" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender