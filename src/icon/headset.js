import React from 'react';
import iconSvg from '../icons/normalized/headset.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__headset" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender