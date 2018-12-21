import React from 'react';
import iconSvg from '../icons/normalized/plurk-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__plurk-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender