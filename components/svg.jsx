export default function Svg(props) {
  return (
    <svg height='512px' width='2048px' xmlns={'http://www.w3.org/2000/svg'}>
      <text x={50} y={50} fontSize={50} fontFamily='DejaVu-Sans' fill={'#000'}>Hi,  {props.name}!</text>
      <circle cx={0} cy={0} r={50} fill={'#000'} />
    </svg>
  )
}
