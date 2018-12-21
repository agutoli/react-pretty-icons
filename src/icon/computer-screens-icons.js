import React from 'react';
import iconSvg from '../icons/normalized/computer-screens-icons.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__computer-screens-icons" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender