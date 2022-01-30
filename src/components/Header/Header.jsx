import './header.css';

function Header({ setTitle, setDesc }) {
   return (
      <div className='header'>
            <input
                className='headerTitle'
                placeholder='Form Title'
                onChange={(e) => setTitle(e.target.value)}
            />
            <input 
                className='headerDesc'
                placeholder='Form desciption'
                onChange={(e) => setDesc(e.target.value)}
            />
      </div>
    );
}

export default Header;
