import React from 'react';
import iconSvg from '../icons/normalized/function-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__function-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender