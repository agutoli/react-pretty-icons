import React from 'react';
import iconSvg from '../icons/normalized/alarm-light.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alarm-light" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender