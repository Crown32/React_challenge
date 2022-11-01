import { AiFillGithub } from 'react-icons/ai'

const Footer = ():JSX.Element => {
  return (
    <footer className='footer bg-secondary w-full flex justify-center items-center h-16 '>
      <div className='w-3/4 flex justify-between'>
        <p>© 2022 - Todos os direitos reservados</p>
        <a href="https://github.com/Crown32" target="T_blank"><AiFillGithub className='w-7 h-7'/></a>
        <p>Desenvolvido por Lucas eleutério Bueno</p>
      </div>
    </footer>
  )
}

export default Footer;