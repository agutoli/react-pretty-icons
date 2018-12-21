import React from 'react';
import iconSvg from '../icons/normalized/pentagon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pentagon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender