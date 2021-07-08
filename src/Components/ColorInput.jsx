import colorNames from 'colornames';

const ColorInput = ({
	colorValue,
	setColorValue,
	setHexValue,
	isDarkText,
	setIsDarkText,
}) => {
	const handleChangeColor = e => {
		setColorValue(e.target.value);
		setHexValue(colorNames(e.target.value));
	};

	const handleTextColor = e => setIsDarkText(prevIsDarkText => !prevIsDarkText);

	return (
		<form onSubmit={e => e.preventDefault()}>
			<label>Add Color Name:</label>
			<input
				autoFocus
				type='text'
				placeholder='Add color name'
				required
				id='colorInput'
				value={colorValue}
				onChange={handleChangeColor}
			/>
			<button type='button' onClick={handleTextColor}>
				Toggle Text Color
			</button>
		</form>
	);
};

export default ColorInput;
