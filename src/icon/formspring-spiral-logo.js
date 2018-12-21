import React from 'react';
import iconSvg from '../icons/normalized/formspring-spiral-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__formspring-spiral-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender