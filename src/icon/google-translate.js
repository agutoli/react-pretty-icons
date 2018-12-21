import React from 'react';
import iconSvg from '../icons/normalized/google-translate.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-translate" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender