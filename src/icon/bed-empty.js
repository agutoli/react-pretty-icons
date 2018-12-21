import React from 'react';
import iconSvg from '../icons/normalized/bed-empty.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bed-empty" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender