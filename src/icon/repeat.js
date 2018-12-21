import React from 'react';
import iconSvg from '../icons/normalized/repeat.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__repeat" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender