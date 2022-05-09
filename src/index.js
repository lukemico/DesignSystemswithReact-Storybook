import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { SecondaryButton, TertiaryButton } from './components/Buttons';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme, darkTheme } from './utils';
import { SignUpModal, PrimaryButton } from './components';

const App = () => {
	const [useDarkTheme, setUseDarkTheme] = useState(false);
	const [showModal, setShowModal] = useState(false);
	return (
		<ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
			<PrimaryButton
				style={{ margin: '0 16px' }}
				onClick={() => setShowModal(!showModal)}
			>
				Primary Button
			</PrimaryButton>
			<SecondaryButton
				style={{ margin: '0 16px' }}
				onClick={() => setShowModal(!showModal)}
			>
				Secondary Button
			</SecondaryButton>
			<TertiaryButton
				style={{ margin: '0 16px' }}
				onClick={() => setShowModal(!showModal)}
			>
				Tertiary Button
			</TertiaryButton>
			<button
				style={{
					margin: '0 16px 24px',
					padding: '8px',
					background: 'none',
				}}
				onClick={() => setUseDarkTheme(true)}
			>
				Dark theme
			</button>
			<button
				style={{
					margin: '0 16px 24px',
					padding: '8px',
					background: 'none',
				}}
				onClick={() => setUseDarkTheme(false)}
			>
				Default theme
			</button>
			<PrimaryButton
				style={{ margin: '0 16px' }}
				onClick={() => setShowModal(!showModal)}
			>
				Show modal
			</PrimaryButton>
			<div
				style={{
					background: useDarkTheme
						? defaultTheme.primaryColor
						: darkTheme.primaryColor,
					width: '100vw',
					height: '90vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-around',
				}}
			>
				<SignUpModal
					showModal={showModal}
					setShowModal={setShowModal}
				/>

				<GlobalStyle />
			</div>
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
