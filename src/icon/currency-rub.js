import React from 'react';
import iconSvg from '../icons/normalized/currency-rub.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__currency-rub" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender