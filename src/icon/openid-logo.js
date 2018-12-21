import React from 'react';
import iconSvg from '../icons/normalized/openid-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__openid-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender