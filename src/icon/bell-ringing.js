import React from 'react';
import iconSvg from '../icons/normalized/bell-ringing.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bell-ringing" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender