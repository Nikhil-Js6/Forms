import './topbar.css';

function Topbar() {

  return (
    <div className='topbarWrapper'>
        <div className='topbar'>
            <h1 className='logo'>Google <span>Forms</span></h1>
            {

            }
            <a href='/create'>
                <span>Create your form</span>
            </a>
        </div>
    </div>
  );
}

export default Topbar;
