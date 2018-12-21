import React from 'react';
import iconSvg from '../icons/normalized/rice.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rice" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender