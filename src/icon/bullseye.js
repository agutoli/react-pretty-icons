import React from 'react';
import iconSvg from '../icons/normalized/bullseye.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bullseye" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender