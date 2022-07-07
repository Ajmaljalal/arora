import React from 'react'

type StarIconProps = {
  color: string
  onClick?: () => void
}

const StarIcon = ({ color, onClick }: StarIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      fill={color}
      width="14"
      height="14"
      stroke='#fad42d'
      cursor='pointer'
      onClick={onClick}
      x="0px" y="0px"
      viewBox="0 0 358.966 358.966">
      <path fill={`fill:${color};`} d="M358.966,143.652c0-11.38-9.047-20.582-20.183-20.582c-0.301,0-0.602,0.024-0.894,0.041
        l-0.154-0.569H232.323l-30.076-92.544l-0.268-0.016c-0.293-12.404-10.234-22.419-22.5-22.419c-12.03,0-21.817,9.616-22.459,21.736
        h-0.081l-30.311,93.243H25.247c-1.13-0.179-2.276-0.301-3.471-0.301C9.754,122.242,0,132.175,0,144.449
        c0,9.673,6.088,17.875,14.55,20.923l79.424,57.697l-31.986,98.47l0.602,0.447c-0.805,2.26-1.26,4.698-1.26,7.259
        c0,11.811,9.397,21.386,20.996,21.386c5.064,0,9.714-1.845,13.347-4.91l0.236,0.195l83.562-60.72l84.854,61.655l0.406-0.276
        c3.56,3.008,8.137,4.828,13.111,4.828c11.372,0,20.582-9.397,20.582-20.972c0-2.122-0.309-4.154-0.886-6.08l0.293-0.179
        l-32.839-101.103l83.919-60.981l-0.171-0.553C354.845,157.975,358.966,151.293,358.966,143.652z"
      />
    </svg>
  )
}

export default StarIcon

  // <svg xmlns = "http://www.w3.org/2000/svg"
  //   fill = { color }
  //   width = "14"
  //   height = "14"
  //   stroke = '#fad42d'
  //   onClick = { onClick }
  //   x = "0px" y = "0px"
  //   viewBox = "0 0 358.966 358.966" xml: space = "preserve" >
  //     <path style="fill:#FFD831;" d="M358.966,143.652c0-11.38-9.047-20.582-20.183-20.582c-0.301,0-0.602,0.024-0.894,0.041
  //       l-0.154-0.569H232.323l-30.076-92.544l-0.268-0.016c-0.293-12.404-10.234-22.419-22.5-22.419c-12.03,0-21.817,9.616-22.459,21.736
  //       h-0.081l-30.311,93.243H25.247c-1.13-0.179-2.276-0.301-3.471-0.301C9.754,122.242,0,132.175,0,144.449
  //       c0,9.673,6.088,17.875,14.55,20.923l79.424,57.697l-31.986,98.47l0.602,0.447c-0.805,2.26-1.26,4.698-1.26,7.259
  //       c0,11.811,9.397,21.386,20.996,21.386c5.064,0,9.714-1.845,13.347-4.91l0.236,0.195l83.562-60.72l84.854,61.655l0.406-0.276
  //       c3.56,3.008,8.137,4.828,13.111,4.828c11.372,0,20.582-9.397,20.582-20.972c0-2.122-0.309-4.154-0.886-6.08l0.293-0.179
  //       l-32.839-101.103l83.919-60.981l-0.171-0.553C354.845,157.975,358.966,151.293,358.966,143.652z"
  //     />
  // </svg>