import React from 'react';
import iconSvg from '../icons/normalized/vanish.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vanish" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender