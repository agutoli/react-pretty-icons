import React from 'react';
import iconSvg from '../icons/normalized/at.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__at" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender