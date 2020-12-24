import { motion } from 'framer-motion'

const RadioCircle = ({checked, checkedColor = '#54c6ff', unCheckedColor = '#CCC', ...props}) => (
  <div {...props}>
    <div
      className={`border-2 rounded-full w-5 h-5 flex justify-center items-center`}
      style={{ borderColor: checked ? checkedColor : unCheckedColor }}
    >
      <motion.div
        className={`w-1 h-1 border-8 rounded-full border-gray-400`}
        style={{ borderColor: checked ? checkedColor : unCheckedColor }}
        initial={{ scale: 0 }}
        animate={{ scale: checked ? 0.7 : 0}}
      />
    </div>
  </div>
)
export default RadioCircle