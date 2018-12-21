import React from 'react';
import iconSvg from '../icons/normalized/snowflake.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__snowflake" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender