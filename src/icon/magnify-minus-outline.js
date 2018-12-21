import React from 'react';
import iconSvg from '../icons/normalized/magnify-minus-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__magnify-minus-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender