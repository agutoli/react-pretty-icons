import React from 'react';
import iconSvg from '../icons/normalized/magnify-plus-cursor.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__magnify-plus-cursor" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender