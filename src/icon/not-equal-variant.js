import React from 'react';
import iconSvg from '../icons/normalized/not-equal-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__not-equal-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender