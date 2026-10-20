import { useEffect, useRef, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useMobile, useScrollToSection } from '@hooks';
import { Section } from '@constants';
import './nav-styles.css';

interface NavProps {
  isDarkMode: boolean
  toggleDarkMode: (checked: boolean) => void
}

const sections = [
  { id: Section.ABOUT, label: 'About' },
  { id: Section.SKILLS, label: 'Skills' },
  { id: Section.PROJECTS, label: 'Projects' },
  { id: Section.CONTACT, label: 'Contact' },
];

const Nav = ({ isDarkMode, toggleDarkMode }: NavProps) => {
  const isMobile = useMobile();
  const scrollToSection = useScrollToSection();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(Section.ABOUT);

  useEffect(() => {
    if (!isMobile) setMobileNavOpen(false);
  }, [isMobile]);

  useEffect(() => {
    if (!mobileNavOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileNavOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMobileNavOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [mobileNavOpen]);

  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      const threshold = (headerRef.current?.offsetHeight ?? 64) + 96;
      let current: string = Section.ABOUT;
      for (const { id } of sections) {
        if ((document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= threshold) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };
    updateActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const navigate = (section: string) => {
    setMobileNavOpen(false);
    if (isMobile && mobileNavOpen) menuButtonRef.current?.focus();
    scrollToSection(section);
  };

  return (
    <header ref={headerRef} className={`site-header${mobileNavOpen ? ' is-open' : ''}`}>
      <div className='nav'>
        <button
          ref={menuButtonRef}
          type='button'
          className='hamburger'
          onClick={() => setMobileNavOpen(open => !open)}
          aria-label={mobileNavOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileNavOpen}
          aria-controls='main-navigation'
        >
          <span /><span /><span />
        </button>
        <nav id='main-navigation' className='nav-center' aria-label='Main navigation'>
          <ul>
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button type='button' onClick={() => navigate(id)} aria-current={activeSection === id ? 'location' : undefined}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type='button'
          className={`theme-toggle${isDarkMode ? ' is-dark' : ''}`}
          onClick={() => toggleDarkMode(!isDarkMode)}
          aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          <FiSun size={20} className='theme-icon theme-icon-sun' aria-hidden='true' />
          <FiMoon size={20} className='theme-icon theme-icon-moon' aria-hidden='true' />
        </button>
      </div>
    </header>
  );
};

export default Nav;
