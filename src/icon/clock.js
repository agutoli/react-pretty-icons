import React from 'react';
import iconSvg from '../icons/normalized/clock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender