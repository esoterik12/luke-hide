// icon:facebook | Ant Design Icons https://ant.design/components/icon/ | Ant Design
export default function IconFacebook({
  classes,
  hslColor
}: {
  classes: string
  hslColor: string | undefined
}) {
  const colorStyle = hslColor ? { color: `hsl(${hslColor}, 80%, 65%)` } : {}

  return (
    <svg
      viewBox='0 0 1024 1024'
      fill='currentColor'
      height='1em'
      width='1em'
      className={classes}
      style={colorStyle}
    >
      <path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z' />
    </svg>
  )
}
