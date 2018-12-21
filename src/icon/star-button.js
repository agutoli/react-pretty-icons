import React from 'react';
import iconSvg from '../icons/normalized/star-button.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__star-button" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender