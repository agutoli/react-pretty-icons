import React from 'react';
import iconSvg from '../icons/normalized/basketball.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__basketball" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender