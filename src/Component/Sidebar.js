import React from 'react';
import {
	ClipboardIcon,
	CubeIcon,
	UserGroupIcon,
	HandRaisedIcon,
	CircleStackIcon,
	GiftIcon,
	InformationCircleIcon,
	CurrencyRupeeIcon,
	QuestionMarkCircleIcon,
} from '@heroicons/react/24/solid';

const dashboardIcon = <ClipboardIcon className='text-gray-300 h-6 w-6 mr-3' />;
const ordersIcon = <CubeIcon className='text-gray-300 h-6 w-6 mr-3' />;
const teamMemberIcon = <UserGroupIcon className='text-gray-300 h-6 w-6 mr-3' />;
const PartnersIcon = <HandRaisedIcon className='text-gray-300 h-6 w-6 mr-3' />;
const productLitstingIcon = (
	<CircleStackIcon className='text-gray-300 h-6 w-6 mr-3' />
);
const awardIcon = <GiftIcon className='text-gray-300 h-6 w-6 mr-3' />;
const aboutUsIcon = (
	<InformationCircleIcon className='text-gray-300 h-6 w-6 mr-3' />
);
const paymentInfoIcon = (
	<CurrencyRupeeIcon className='text-gray-300 h-6 w-6 mr-3' />
);

const sidebarButtons = [
	{
		id: '1',
		image: require('../logo.jpg'),
		buttonName: 'Dashboard',
		icon: dashboardIcon,
	},
	{
		id: '2',
		image: require('../logo.jpg'),
		buttonName: 'Orders',
		icon: ordersIcon,
	},
	{
		id: '3',
		image: require('../logo.jpg'),
		buttonName: 'Team Members',
		icon: teamMemberIcon,
	},
	{
		id: '4',
		image: require('../logo.jpg'),
		buttonName: 'Partners',
		icon: PartnersIcon,
	},
	{
		id: '5',
		image: require('../logo.jpg'),
		buttonName: 'Product Listings',
		icon: productLitstingIcon,
	},
	{
		id: '6',
		image: require('../logo.jpg'),
		buttonName: 'Awards & Honours',
		icon: awardIcon,
	},
	{
		id: '7',
		image: require('../logo.jpg'),
		buttonName: 'About Us',
		icon: aboutUsIcon,
	},
	{
		id: '8',
		image: require('../logo.jpg'),
		buttonName: 'Payment Info',
		icon: paymentInfoIcon,
	},
];

function Sidebar({ activeScreen, setActiveScreen }) {
	//function to return highlighted icon
	const highlightedIcons = (buttonName) => {
		switch (buttonName) {
			case sidebarButtons[0].buttonName:
				return <ClipboardIcon className='text-red-600 h-6 w-6 mr-3' />;
			case sidebarButtons[1].buttonName:
				return <CubeIcon className='text-red-600 h-6 w-6 mr-3' />;
			case sidebarButtons[2].buttonName:
				return <UserGroupIcon className='text-red-600 h-6 w-6 mr-3' />;
			case sidebarButtons[3].buttonName:
				return <HandRaisedIcon className='text-red-600 h-6 w-6 mr-3' />;
			case sidebarButtons[4].buttonName:
				return <CircleStackIcon className='text-red-600 h-6 w-6 mr-3' />;
			case sidebarButtons[5].buttonName:
				return <GiftIcon className='text-red-600 h-6 w-6 mr-3' />;
			case sidebarButtons[6].buttonName:
				return <InformationCircleIcon className='text-red-600 h-6 w-6 mr-3' />;
			case sidebarButtons[7].buttonName:
				return <CurrencyRupeeIcon className='text-red-600 h-6 w-6 mr-3' />;
			default:
				return null;
		}
	};

	const onButtonClick = (e, buttonName) => {
		e.preventDefault();
		setActiveScreen(buttonName);
	};

	return (
		<div className='flex flex-col bg-white m-6 rounded-lg'>
			<div className='flex flex-row items-center m-2 pt-3 pb-3 pl-4 pr-4'>
				<img
					src={require('../logo.jpg')}
					alt='Checkout'
					className='h-10 w-10 mr-4'
				/>
				<h1 className='font-medium text-sm'>A.T. Inks</h1>
			</div>
			{sidebarButtons.map((item, index) => (
				<button
					onClick={(e) => onButtonClick(e, item.buttonName)}
					className={`flex items-center ml-2 mr-2 mt- mb-1 pt-2 pb-2 pl-4 pr-4 hover:bg-red-50
                    ${activeScreen === item.buttonName ? 'bg-red-50' : ''}`}
					key={item.id.toString()}
				>
					{activeScreen === item.buttonName
						? highlightedIcons(activeScreen)
						: item.icon}
					<p
						className={`${
							activeScreen === item.buttonName
								? 'font-semibold text-red-700 text-xs'
								: 'text-slate-400 text-xs '
						}`}
					>
						{item.buttonName}
					</p>
				</button>
			))}

			<div className='flex justify-center mt-16 mb-6'>
				<div className='h-10/12 w-10/12 shadow-md border rounded-md p-4 flex flex-col items-center justify-center'>
					<QuestionMarkCircleIcon className='text-gray-300 h-8 w-8' />
					<h1 className={`font-bold black`}>Need Help?</h1>
					<p className='w-11/12 mt-4 mb-6'>
						Our support team is at your disposal.
					</p>
					<button className=' p-1 border rounded-lg bg-black w-2/3 justify-center flex flex-row'>
						<h1 className='text-white font-semibold'>Get Help</h1>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
