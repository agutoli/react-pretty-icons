import React from 'react';
import iconSvg from '../icons/normalized/bell-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bell-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender