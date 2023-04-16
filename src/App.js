import { useState } from 'react';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import AboutUsSection from './Component/AboutUsSection';

function App() {
	const [activeScreen, setActiveScreen] = useState('About Us');

	return (
		<div className='bg-violet-50 flex flex-col'>
			<div className=''>
				<Header />
			</div>
			<div className='flex flex-row'>
				<div className='flex flex-[0.2]'>
					<Sidebar
						activeScreen={activeScreen}
						setActiveScreen={setActiveScreen}
					/>
				</div>
				<div className='flex flex-[0.8]'>
					{activeScreen === 'About Us' && <AboutUsSection />}
				</div>
			</div>
		</div>
	);
}

export default App;
