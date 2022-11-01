import { useAuth } from '../contexts/AuthContext';
import navLogo from '../assets/nav_logo.png';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = (): JSX.Element => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="header bg-secondary p-1 w-full flex justify-center flex-row">
      <div className='w-3/4 flex items-center justify-between'>
        <img src={navLogo} className="h-16 ml-4" alt="Logo da Navbar" />
        <div className="input-group w-fit">
          <input type="text" placeholder="Procurar produtos..." className="input input-bordered w-96 h-12" />
          <button className="btn btn-square">
            <AiOutlineSearch className='w-6 h-6'/>
          </button>
        </div>
        <div className='flex'>
          <div className='mr-3 flex flex-col items-end'>
            <p>Olá, {user?.displayName} </p>
            <p className='text-red-600 cursor-pointer w-fit hover:text-red-900' onClick={handleLogout}>Sair</p>
          </div>
          <img src={user?.photoUrl} alt="User photo" className='rounded-md w-14 h-14  '/>
        </div>
      </div>
    </header>
  );
}   

export default Header;