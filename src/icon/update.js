import React from 'react';
import iconSvg from '../icons/normalized/update.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__update" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender