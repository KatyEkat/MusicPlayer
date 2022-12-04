import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={1336}
    height={773}
    viewBox="0 0 1336 773"
    backgroundColor="#b8b8b8"
    foregroundColor="#e0e0e0"
    {...props}
  >

    {/* поиск */}
    <rect x="218" y="30" rx="0" ry="0" width="1593" height="68" /> 
    {/* лого */}
    <rect x="3" y="35" rx="0" ry="0" width="172" height="72" /> 
    {/* ,\бургер */}
    <rect x="6" y="110" rx="0" ry="0" width="60" height="50" /> 
    {/* Треки */}
    <rect x="218" y="117" rx="0" ry="0" width="172" height="72" /> 
    {/* искать по */}
    <rect x="218" y="200" rx="0" ry="0" width="491" height="39" /> 
    {/* блок с треками */}
    <rect x="218" y="250" rx="0" ry="0" width="750"  height="417" />
    {/* 3 блока справа */}
    <rect x="1050" y="250" rx="0" ry="0" width="250" height="120" /> 
    <rect x="1050" y="380" rx="0" ry="0" width="250" height="120" />
    <rect x="1050" y="510" rx="0" ry="0" width="250" height="120" /> 
    {/* воспроизведение музыки */}
    <rect x="16" y="680" rx="0" ry="0" width="1923" height="50" />
  </ContentLoader>
)

export default Skeleton