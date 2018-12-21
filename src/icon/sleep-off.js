import React from 'react';
import iconSvg from '../icons/normalized/sleep-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sleep-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender