import React from 'react';
import iconSvg from '../icons/normalized/yahoo-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__yahoo-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender