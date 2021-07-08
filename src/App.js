import './App.css';
import Square from 'Components/Square';
import ColorInput from 'Components/ColorInput';
import { useState } from 'react';

const App = () => {
	const [colorValue, setColorValue] = useState('');
	const [hexValue, setHexValue] = useState('');
	const [isDarkText, setIsDarkText] = useState(true);

	return (
		<div className='App'>
			<Square
				colorValue={colorValue}
				hexValue={hexValue}
				isDarkText={isDarkText}></Square>
			<ColorInput
				colorValue={colorValue}
				setColorValue={setColorValue}
				setHexValue={setHexValue}
				isDarkText={isDarkText}
				setIsDarkText={setIsDarkText}></ColorInput>
		</div>
	);
};

export default App;
