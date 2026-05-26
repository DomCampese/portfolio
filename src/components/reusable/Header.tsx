import { type ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className='section-header'>
      <h2>{children}</h2>
      <div className='header-accent'></div>
    </div>
  );
};

export default Header;
