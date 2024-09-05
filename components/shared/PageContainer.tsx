const PageContainer = ({ children }: { children: React.ReactElement }) => {
  return <main className='px-4 pt-8 pb-16 md:px-12 md:py-4 lg:px-32 lg:py-12 xl:px-52'>{children}</main>
}

export default PageContainer
