// File: src/features/playback/components/Divider.tsx
type Props = {
  isHorizontal: boolean
  className?: string
}

export default function Divider({ isHorizontal, className }: Props) {
  const thickness = '1px'
  return (
    <div
      className={`${isHorizontal ? 'border-l' : 'border-t'} border-black-200 ${className}`}
      style={{
        width: isHorizontal ? thickness : 'auto',
        height: isHorizontal ? 'auto' : thickness,
        alignSelf: 'stretch',
      }}
    />)
}
