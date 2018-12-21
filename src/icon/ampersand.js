import React from 'react';
import iconSvg from '../icons/normalized/ampersand.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ampersand" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender