import React from 'react';
import iconSvg from '../icons/normalized/hand-okay.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hand-okay" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender