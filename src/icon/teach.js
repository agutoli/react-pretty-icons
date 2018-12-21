import React from 'react';
import iconSvg from '../icons/normalized/teach.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__teach" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender