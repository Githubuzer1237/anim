import React from 'react'
import { motion } from 'motion/react'
import './Animation.css'
const Animation = () => {
  return (
   <>
<section>
<div className="container">
      <div className="anim__wrap">
          <motion.div 
          className="motor"
          animate={{x: 600}}
          >
          </motion.div>
      </div>
   </div>
</section>
   </>
  )
}

export default Animation