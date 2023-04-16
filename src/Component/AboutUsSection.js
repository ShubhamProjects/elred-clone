import React, { useState } from 'react';
import InfoSection from './InfoSection';
import { PencilIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';

function AboutUsSection() {
	const interactionSection = [
		{
			id: '1',
			section: 'Info',
		},
		{
			id: '2',
			section: 'FAQ',
		},
		{
			id: '3',
			section: 'Complaints and Feedback',
		},
		{
			id: '4',
			section: 'Privacy Policy',
		},
		{
			id: '5',
			section: 'Terms & Conditions',
		},
	];

	const [optionClicked, setOptionClickced] = useState('Info');

	//function to handle click events of different sections
	const onOptionClicked = (e, option) => {
		e.preventDefault();
		setOptionClickced(option);
	};

	return (
		<div className='flex flex-col bg-white mt-6 mb-6 mr-6 rounded-lg w-full p-8'>
			<h1 className='font-semibold text-2xl mb-8'>About Us</h1>
			<div className='flex'>
				<img
					src={require('../logo.jpg')}
					alt='Checkout'
					className='h-16 w-16 mr-4'
				/>
				<div>
					<div className='flex items-center'>
						<h1 className='font-semibold text-2xl'>A.T. Inks</h1>
						<span className='flex ml-6 '>
							<CheckBadgeIcon className='h-4 w-4 text-gray-300 mr-1' />
							<p className='text-xs font-medium text-sky-500 underline'>
								Verify Company
							</p>
						</span>
					</div>
					<p className='text-lg text-gray-500'>Digital Inks</p>
				</div>
			</div>

			<div className='flex mt-6 items-baseline'>
				<p className='w-[55%] text-gray-500'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etium eu
					turpis molestie, dictum est a, mattis tellus.
				</p>
				<button>
					<PencilIcon className='h-4 w-4 text-red-600' />
				</button>
			</div>

			<div className='border-b mt-12'>
				<div className=' flex justify-between w-2/3'>
					{interactionSection.map((item) => (
						<button
							onClick={(e) => onOptionClicked(e, item.section)}
							className={`${
								optionClicked === item.section
									? 'border-b-2 border-b-red-800'
									: ''
							}`}
							key={item.id.toString()}
						>
							<h1
								className={`p-2 ${
									optionClicked === item.section
										? 'font-medium text-base'
										: 'text-sm text-gray-500'
								}`}
							>
								{item.section}
							</h1>
						</button>
					))}
				</div>
			</div>
			{optionClicked === 'Info' && <InfoSection />}
		</div>
	);
}

export default AboutUsSection;
