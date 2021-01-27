import { motion } from 'framer-motion'

const Line = ({color, size, ...props }) => (
  <motion.div {...props}>
    <svg
      width={size}
      height={size / 8}
      viewBox="0 0 32 4"
      fill="none"
    >
      <rect
        width="32"
        height="4"
        rx="2"
        fill={color}
      />
    </svg>
  </motion.div>
)
export default Line