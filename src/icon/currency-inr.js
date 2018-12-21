import React from 'react';
import iconSvg from '../icons/normalized/currency-inr.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__currency-inr" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender