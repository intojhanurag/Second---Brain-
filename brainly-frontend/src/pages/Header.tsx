
import "./Header.css"
import { FaBrain} from 'react-icons/fa'; // Import icons from react-icons

export function Header(){
  return (
    <header className="header dark:bg-black">
      <div className="logo-container ">
        <FaBrain className="brain-logo" />
        <h1 className="thinkflow-heading">ThinkFlow</h1>
      </div>
    </header>
  );
};