import React from 'react';
import iconSvg from '../icons/normalized/credit-card-settings.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__credit-card-settings" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender