import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import PageContainer from '../shared/PageContainer'
// interface CodeExampleProps {
//   code: string
// }

const CodeDisplay = ({ code }: { code: string }) => {
  return (
    <PageContainer>
      <>
        <h1>Function Code Example</h1>
        <SyntaxHighlighter language='typescript' style={docco}>
          {code}
        </SyntaxHighlighter>
      </>
    </PageContainer>
  )
}

export default CodeDisplay
