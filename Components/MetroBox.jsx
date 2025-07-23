import React from 'react'
import * as motion from "motion/react-client"
import WorkPropsText from './WorkPropsText'

const MetroBox = () => {

  return (
    <div>
       <motion.div
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.8 }}
            className='w-[78vw] md:w-[75vw] mb-5 lg:w-[80vw] h-[100vh] bg-[#CDFFCC] rounded-[5px] '
        >
            <WorkPropsText text1={'METROBOX'} text2={'Business Developer'} text3={'2022'} />
        </motion.div>
    </div>
  )
}

export default MetroBox
