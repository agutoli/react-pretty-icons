import React from 'react';
import iconSvg from '../icons/normalized/magnify-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__magnify-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender