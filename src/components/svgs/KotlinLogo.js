const KotlinLogo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.64 8.633" width="64" height="64">
      <defs>
        <linearGradient id="A" x1="2.039" y1="11.659" x2="9.95" y2="3.748" gradientUnits="userSpaceOnUse">
          <stop offset=".108" stop-color="#c757bc"/>
          <stop offset=".173" stop-color="#cd5ca9"/>
          <stop offset=".492" stop-color="#e8744f"/>
          <stop offset=".716" stop-color="#f88316"/>
          <stop offset=".823" stop-color="#ff8900"/>
        </linearGradient>
        <linearGradient id="B" gradientUnits="userSpaceOnUse">
          <stop offset=".296" stop-color="#00afff"/>
          <stop offset=".694" stop-color="#5282ff"/>
          <stop offset="1" stop-color="#945dff"/>
        </linearGradient>
        <linearGradient id="C" x1="3.369" y1="6.189" x2="6.073" y2="3.484" xlinkHref="#B"/>
        <linearGradient xlinkHref="#B" id="D" x1="6.184" y1="13.878" x2="10.04" y2="10.022"/>
      </defs>
      <g transform="matrix(1.016327 0 0 1.016327 -3.52726 -3.909123)">
        <path d="M7.74 3.843L3.47 8.33v4.013l4.262-4.27 4.24-4.232z" fill="url(#A)"/>
        <path d="M3.47 12.344l4.262-4.27 4.24 4.27z" fill="url(#D)"/>
        <path d="M3.47 3.843H7.74L3.47 8.33z" fill="url(#C)"/>
      </g>
    </svg>
  )
}

export default KotlinLogo