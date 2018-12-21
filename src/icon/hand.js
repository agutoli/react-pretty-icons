import React from 'react';
import iconSvg from '../icons/normalized/hand.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hand" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender