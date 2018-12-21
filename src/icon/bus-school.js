import React from 'react';
import iconSvg from '../icons/normalized/bus-school.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bus-school" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender