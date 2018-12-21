import React from 'react';
import iconSvg from '../icons/normalized/wunderlist.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wunderlist" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender