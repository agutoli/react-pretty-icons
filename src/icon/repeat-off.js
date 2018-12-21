import React from 'react';
import iconSvg from '../icons/normalized/repeat-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__repeat-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender