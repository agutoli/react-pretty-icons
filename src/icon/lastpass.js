import React from 'react';
import iconSvg from '../icons/normalized/lastpass.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lastpass" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender