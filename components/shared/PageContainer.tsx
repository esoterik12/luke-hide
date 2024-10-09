const PageContainer = ({ children }: { children: React.ReactElement }) => {
  return (
    // 
    <main className='px-4 pb-16 pt-20 md:px-12 md:pt-20 lg:px-32 lg:pt-20 xl:px-52'>
      {children}
    </main>
  )
}

export default PageContainer
