import React from 'react';
import iconSvg from '../icons/normalized/alarm-snooze.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alarm-snooze" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender