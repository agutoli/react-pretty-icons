import React from 'react';
import iconSvg from '../icons/normalized/target-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__target-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender