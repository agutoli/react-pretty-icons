import React from 'react';
import iconSvg from '../icons/normalized/monitor-cellphone.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__monitor-cellphone" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender