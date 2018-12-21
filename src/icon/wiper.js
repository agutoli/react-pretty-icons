import React from 'react';
import iconSvg from '../icons/normalized/wiper.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wiper" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender