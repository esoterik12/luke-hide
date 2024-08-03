'use client'
import SelectIcon from '../icons/SelectIcon'
import { motion, easeIn, AnimatePresence } from 'framer-motion'
import { useAppContext } from '@/lib/context/AppContext'
import { useTheme } from 'next-themes'

const initialValues = { opacity: 0, x: 0, scale: 0.4 }
const anitmateValues = { opacity: 1, scale: 1 }
const exitValues = { opacity: 0, scale: 0.4 }
const transitionValues = { duration: 0.35, ease: 'easeIn' }
const classes = 'flex flex-col items-center text-sm'

const ProjectTech = () => {
  const { currentProject } = useAppContext()
  const { theme } = useTheme()

  return (
    <div className='mt-6 flex flex-row'>
      <div className='flex flex-row gap-x-14'>
        <div className='w-9'>
          <AnimatePresence>
            {(currentProject === 0 || currentProject === 2) && (
              <motion.div
                initial={initialValues}
                animate={anitmateValues}
                exit={exitValues}
                transition={transitionValues}
                className={classes}
              >
                <SelectIcon iconClasses='h-9 w-9' iconSelection='mongodb' />
                <p>MongoDB</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className='w-9'>
          <AnimatePresence>
            <motion.div
              initial={initialValues}
              animate={anitmateValues}
              exit={exitValues}
              transition={transitionValues}
              className={classes}
            >
              <SelectIcon iconClasses='h-9 w-9' iconSelection='typescript' />{' '}
              <p>TypeScript</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className='w-9'>
          <AnimatePresence>
            <motion.div
              initial={initialValues}
              animate={anitmateValues}
              exit={exitValues}
              transition={transitionValues}
              className={classes}
            >
              <SelectIcon
                iconClasses='h-9 w-9'
                iconSelection='nextjs'
                fillHex={theme === 'light' ? '#000000' : '#ffffff'}
              />{' '}
              <p>NextJS</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className='w-9'>
          <AnimatePresence>
            <motion.div
              initial={initialValues}
              animate={anitmateValues}
              exit={exitValues}
              transition={transitionValues}
              className={classes}
            >
              <SelectIcon iconClasses='h-9 w-9' iconSelection='reactjs' />{' '}
              <p>React</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className='w-9'>
          <AnimatePresence>
            {currentProject === 2 && (
              <motion.div
                initial={initialValues}
                animate={anitmateValues}
                exit={exitValues}
                transition={transitionValues}
                className={classes}
              >
                <SelectIcon
                  iconClasses='h-9 w-9'
                  iconSelection='threejs'
                  fillHex={theme === 'light' ? '#000000' : '#ffffff'}
                />{' '}
                <p>ThreeJS</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default ProjectTech
