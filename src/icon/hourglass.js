import React from 'react';
import iconSvg from '../icons/normalized/hourglass.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hourglass" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender