import React from 'react';
import iconSvg from '../icons/normalized/delicious-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__delicious-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender