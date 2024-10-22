import React from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/App');  // Redirects to '/new-page'
    };
    return (
        <div>
            <Link to="/App">giii</Link>
        </div>
    );
};

export default App;