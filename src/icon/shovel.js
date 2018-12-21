import React from 'react';
import iconSvg from '../icons/normalized/shovel.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shovel" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender