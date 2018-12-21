import React from 'react';
import iconSvg from '../icons/normalized/information-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__information-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender