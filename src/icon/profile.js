import React from 'react';
import iconSvg from '../icons/normalized/profile.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__profile" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender