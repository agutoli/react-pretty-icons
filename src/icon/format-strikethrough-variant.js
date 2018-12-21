import React from 'react';
import iconSvg from '../icons/normalized/format-strikethrough-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-strikethrough-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender