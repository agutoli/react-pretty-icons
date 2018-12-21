import React from 'react';
import iconSvg from '../icons/normalized/sign-caution.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sign-caution" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender