import React from 'react';
import iconSvg from '../icons/normalized/star-of-david.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__star-of-david" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender