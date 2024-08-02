'use client'

import { useAppContext } from '@/lib/context/AppContext'
import SelectIcon from '../icons/SelectIcon'

const ProjectSelectors = () => {
  const { currentProject, setCurrentProject } = useAppContext()

  console.log('currentProject', currentProject)

  const handleNext = () => {
    setCurrentProject(prevState => (prevState === 2 ? 0 : prevState + 1))
  }

  const handlePrev = () => {
    setCurrentProject(prevState => (prevState === 0 ? 2 : prevState - 1))
  }

  return (
    <div className='mt-2 flex flex-row gap-x-6'>
      <button onClick={() => handlePrev()}>
        <SelectIcon iconClasses='h-8 w-8' iconSelection='leftArrowCircle' />
      </button>
      <button onClick={() => handleNext()}>
        <SelectIcon iconClasses='h-8 w-8' iconSelection='rightArrowCircle' />{' '}
      </button>
    </div>
  )
}

export default ProjectSelectors
