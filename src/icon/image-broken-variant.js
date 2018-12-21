import React from 'react';
import iconSvg from '../icons/normalized/image-broken-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__image-broken-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender