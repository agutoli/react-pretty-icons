import React from 'react';
import iconSvg from '../icons/normalized/prescription.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__prescription" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender