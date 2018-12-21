import React from 'react';
import iconSvg from '../icons/normalized/speedometer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__speedometer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender