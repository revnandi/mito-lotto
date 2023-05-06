import { render } from 'preact';
import { App } from './app.tsx';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/800.css';
import './style/styles.scss';

render(<App />, document.getElementById('app') as HTMLElement)
