import React from 'react';
import iconSvg from '../icons/normalized/vhs.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vhs" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender