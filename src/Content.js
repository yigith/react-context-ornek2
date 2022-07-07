import './Content.css';
import AppContext from './AppContext';
import { useContext } from 'react';
import Login from './Login';

function Content() {
  const context = useContext(AppContext);

  return (
    <main className="Content">
        <h1>Siteme Hoşgeldiniz</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, quia, cupiditate ad esse non libero illo quod vitae itaque voluptatem cum molestias ratione nihil officia veritatis quos, nisi dolore. Unde!</p>
        <p><strong>{context.userName}</strong> adıyla oturum açtınız.</p>
        <Login />
    </main>
  );
}

export default Content;