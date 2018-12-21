import React from 'react';
import iconSvg from '../icons/normalized/sign-direction.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sign-direction" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender