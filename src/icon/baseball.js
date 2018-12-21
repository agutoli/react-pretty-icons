import React from 'react';
import iconSvg from '../icons/normalized/baseball.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__baseball" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender