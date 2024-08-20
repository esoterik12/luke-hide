import CodeDisplay from '@/components/display/CodeDisplay'
import React from 'react'
import fs from 'fs'
import path from 'path'
type Props = {}

// This page has potential: the idea is to create a tabbed disaply of things I've learned with each tabs split into sections
// Examples would be books, courses, algorithms, libraries used, React concepts, NextJS concepts, DB concepts
// This will draw heavily on the spreadsheet data that I've kept for almost a year now
// It can also include the monthly goals data
// It operates as a sort of learning blog

const LearningPage = (props: Props) => {
  const filePath = path.join(process.cwd(), './lib/actions/sendContact.ts')
  const code = fs.readFileSync(filePath, 'utf-8')

  return (
    <div>
      <CodeDisplay code={code} />
    </div>
  )
}

export default LearningPage
