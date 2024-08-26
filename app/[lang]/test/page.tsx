import { ThreeBackgroundScroll } from '@/components/shared/ThreeBackgroundScroll'
import ThreeCanvasComp from '@/components/shared/ThreeCanvas'
import React from 'react'

type Props = {}

const TestPage = (props: Props) => {
  return (
    <div className='w-full flex flex-col'>
      <ThreeCanvasComp>
        <ThreeBackgroundScroll />
      </ThreeCanvasComp>
    </div>
  )
}

export default TestPage
