// app/home/HomePage.tsx
import Sidebar from "../Sidebar";
import MainContent from '../MainContent/MainContent';
import RightSidebar from '../RightSidebar';
import styles from './HomePage.module.scss';

export default function HomePage() {
    return (
        <div className={styles.container}>
            <Sidebar avatarUrl={'https://randomuser.me/api/portraits/men/9.jpg'} />
            <MainContent />
            <RightSidebar />
        </div>
    );
}