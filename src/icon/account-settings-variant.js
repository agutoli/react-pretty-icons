import React from 'react';
import iconSvg from '../icons/normalized/account-settings-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-settings-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender