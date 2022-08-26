import useMobile from '../../hooks/useMobile'

const Header = ({ children }) => {

  const isMobile = useMobile();

  return (
    <>
      <h1 style={(!isMobile) ? { marginBottom: 5 } : {}}>{children}</h1>
      {(!isMobile) && <div className='underline'></div>}
    </>
  )
}

export default Header