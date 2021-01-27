import { motion } from 'framer-motion'
import ProgressBar from '../ProgressBar'

const getMax = data => {
  let values = []
  for(const item of data) {
    values.push(item.value)
  }
  return Math.max(...values)
}

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.7
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Graph({data = [], max}) {

  const finalMax = max || getMax(data)

  const renderItem = ({value, label, color, labelPrefix}, i) => {
    const labelClass = i == 0 ? 'font-semibold' : 'font-light'
    return (
      <motion.li
        key={i}
        className="my-3"
        variants={item}
      >
        <div className={`mb-1 ${labelClass}`}>
          {label}
        </div>
        <ProgressBar
          value={value}
          max={finalMax}
          progressColor={color}
          labelPrefix={labelPrefix}
          transition={{
            type: 'tween',
            delay: (i + 1) * 0.7,
            duration: (i + 1.5) * 0.6
          }}
        />
      </motion.li>
    )
  }

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {data.map(renderItem)}
    </motion.ul>
  )
}