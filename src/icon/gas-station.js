import React from 'react';
import iconSvg from '../icons/normalized/gas-station.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gas-station" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender