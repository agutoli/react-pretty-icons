import React from 'react';
import iconSvg from '../icons/normalized/bell-sleep.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bell-sleep" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender