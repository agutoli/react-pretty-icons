import React from 'react';
import iconSvg from '../icons/normalized/cake-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cake-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender