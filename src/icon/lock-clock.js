import React from 'react';
import iconSvg from '../icons/normalized/lock-clock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lock-clock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender