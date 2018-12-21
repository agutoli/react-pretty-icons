import React from 'react';
import iconSvg from '../icons/normalized/rewind.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rewind" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender