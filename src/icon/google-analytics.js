import React from 'react';
import iconSvg from '../icons/normalized/google-analytics.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-analytics" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender