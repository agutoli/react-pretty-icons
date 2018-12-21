import React from 'react';
import iconSvg from '../icons/normalized/currency-twd.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__currency-twd" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender