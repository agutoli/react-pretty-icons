import React from 'react';
import iconSvg from '../icons/normalized/transition.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__transition" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender