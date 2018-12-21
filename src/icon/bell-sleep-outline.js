import React from 'react';
import iconSvg from '../icons/normalized/bell-sleep-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bell-sleep-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender