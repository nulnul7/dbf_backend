import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import './sidebar.css';

const Sidebar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/langsung')
    }
    const { user } = useContext(AuthContext)

    return (
        <div className='navContainer'>
            <div className='navWrapper'>
                <Link to="/"><div className='logo'>5R2i</div></Link>
                <div></div>
                <div className='navPortfolio top'>
                    <Link to="/getPortfolio"><div className='sub'>Portfolio</div></Link>
                    <ul>
                        <Link to="/addPortfolio"><li className='navList'><AddPhotoAlternateOutlinedIcon className='iconNav' /> Portfolio Add</li></Link>
                        <Link to="/updatePortfolio"><li className='navList'><UpdateOutlinedIcon className='iconNav' /> Portfolio Update</li></Link>
                        <Link to="/deletePortfolio"> <li className='navList'><DeleteOutlineOutlinedIcon className='iconNav' /> Portfolio Delete</li></Link>
                    </ul>
                </div>
                <div className='navPortfolio'>
                    <div className='sub'>Blog</div>
                    <ul>
                        <li className='navList'><NoteAddOutlinedIcon className='iconNav' /> Blog Add</li>
                        <li className='navList'><UpdateOutlinedIcon className='iconNav' /> Blog Update</li>
                        <li className='navList'><DeleteOutlineOutlinedIcon className='iconNav' /> Blog Delete</li>
                    </ul>
                </div>
                <div>
                    {user ?
                        <>
                            <div className='sbLogin'>
                                Howdy {user.name}
                            </div>
                                <h3 className='logout' onClick={handleLogout}>Logout</h3>
                        </>
                        : null
                    }
                </div>

            </div>
        </div>
    )
}

export default Sidebar