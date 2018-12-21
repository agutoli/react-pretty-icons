import React from 'react';
import iconSvg from '../icons/normalized/currency-try.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__currency-try" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender