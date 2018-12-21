import React from 'react';
import iconSvg from '../icons/normalized/etsy-letter-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__etsy-letter-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender