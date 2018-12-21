import React from 'react';
import iconSvg from '../icons/normalized/group.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__group" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender