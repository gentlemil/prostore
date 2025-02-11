const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='flex h-screen flex-col'>
      root
      <main className='flex -1 wrapper'>{children}</main>
    </div>
  )
}

export default RootLayout
