import React from 'react';
import iconSvg from '../icons/normalized/server-minus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__server-minus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender