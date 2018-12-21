import React from 'react';
import iconSvg from '../icons/normalized/unity.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__unity" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender