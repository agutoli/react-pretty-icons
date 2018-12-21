import React from 'react';
import iconSvg from '../icons/normalized/speaker-wireless.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__speaker-wireless" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender