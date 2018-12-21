import React from 'react';
import iconSvg from '../icons/normalized/restore-clock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__restore-clock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender