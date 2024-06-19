import './App.style.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export function App() {
    const params = Object.entries({
        cc_load_policy: 0,
        controls: 2,
        fs: 0,
        rel: 0,
        showinfo: 0
    }).map(([key, value]) => `${key}=${value}`).join('&')

    return (<div className='App'>

    </div>)
}