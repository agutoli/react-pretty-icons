import React from 'react';
import iconSvg from '../icons/normalized/yahoo-buzz-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__yahoo-buzz-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender