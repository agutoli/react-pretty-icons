import React from 'react';
import iconSvg from '../icons/normalized/alarm-multiple.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alarm-multiple" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender