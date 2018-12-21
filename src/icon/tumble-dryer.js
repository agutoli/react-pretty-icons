import React from 'react';
import iconSvg from '../icons/normalized/tumble-dryer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tumble-dryer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender