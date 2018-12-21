import React from 'react';
import iconSvg from '../icons/normalized/progress-clock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__progress-clock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender