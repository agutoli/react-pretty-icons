import React from 'react';
import iconSvg from '../icons/normalized/alarm-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alarm-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender