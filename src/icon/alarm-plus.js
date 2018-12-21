import React from 'react';
import iconSvg from '../icons/normalized/alarm-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alarm-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender