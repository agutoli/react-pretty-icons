import React from 'react';
import iconSvg from '../icons/normalized/coins.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__coins" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender