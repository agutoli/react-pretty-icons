import React from 'react';
import iconSvg from '../icons/normalized/death-star-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__death-star-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender