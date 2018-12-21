import React from 'react';
import iconSvg from '../icons/normalized/numeric.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__numeric" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender