import React from 'react';
import iconSvg from '../icons/normalized/cisco-webex.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cisco-webex" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender