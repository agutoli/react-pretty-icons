import React from 'react';
import iconSvg from '../icons/normalized/hand-peace-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hand-peace-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender