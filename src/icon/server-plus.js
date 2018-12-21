import React from 'react';
import iconSvg from '../icons/normalized/server-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__server-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender