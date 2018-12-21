import React from 'react';
import iconSvg from '../icons/normalized/google-chrome.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-chrome" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender