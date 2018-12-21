import React from 'react';
import iconSvg from '../icons/normalized/bus-clock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bus-clock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender