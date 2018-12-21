import React from 'react';
import iconSvg from '../icons/normalized/currency-krw.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__currency-krw" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender