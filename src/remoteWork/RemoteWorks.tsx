import React from 'react';
import r from './RemoteWorks.module.css'
import styles from "../components/common/styles/container.module.css";
import w from "../works/Works.module.css";

export const RemoteWorks = () => {
    return (
        <div className={r.remoteWork}>
            <div className={`${styles.container} ${r.remoteWorkContainer}`}>
                <h2>Рассматриваю варианты удаленной работы</h2>
                <button>Нанять меня</button>
            </div>
        </div>
    );
};



// function useWindowSize() {
//     const [windowSize, setWindowSize] = useState(0);
//     useEffect(() => {
//
//         function handleResize() {
//             setWindowSize(window.innerWidth);
//         }
//
//         window.addEventListener("resize", handleResize);
//         handleResize();
//         return () => window.removeEventListener("resize", handleResize);
//     }, []); // Empty array ensures that effect is only run on mount
//     return windowSize;
// }