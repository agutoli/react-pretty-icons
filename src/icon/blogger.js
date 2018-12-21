import React from 'react';
import iconSvg from '../icons/normalized/blogger.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__blogger" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender