import React, { useState } from 'react';
import CardComponent from './CardComponent';
import Modal from './Modal';
import {
	BookOpenIcon,
	MapPinIcon,
	BriefcaseIcon,
	LinkIcon,
	DocumentTextIcon,
} from '@heroicons/react/24/solid';

const AddressText =
	'C-1 / 351 / 4, GIDC Makarpura, Vadodara - 390010, Gujarat, India';
const HOPText = 'Monday To Friday - 09:00 AM to 06:00 PM';
const StatementText = 'You think it we ink it.';

const contactIcon = <BookOpenIcon className='text-gray-300 h-6 w-6 mr-3' />;
const addressIcon = <MapPinIcon className='text-gray-300 h-6 w-6 mr-3' />;
const hohIcon = <BriefcaseIcon className='text-gray-300 h-6 w-6 mr-3' />;
const socialMediaIcon = <LinkIcon className='text-gray-300 h-6 w-6 mr-3' />;
const statementIcon = (
	<DocumentTextIcon className='text-gray-300 h-6 w-6 mr-3' />
);

const contactDummyData = [
	{
		name: 'SalesTeam',
		email: ['abcd@xyz.com', 'salesteam@abc.com'],
		number: ['9876543210', '7002376459'],
	},
	{
		name: 'MarketingTeam',
		email: ['ehih@fgf.com', 'wief@fbff.com'],
		number: ['1234567890', '0812876462'],
	},
];

function InfoSection() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [contactData, setContactData] = useState(contactDummyData);

	//toggles the side popup
	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<div className='grid grid-cols-3'>
			<>
				<CardComponent
					title='Contact'
					textOnly={false}
					onEditClick={toggleModal}
					displayIcon={contactIcon}
					data={contactData[0]}
					allData={contactData}
				/>
				<CardComponent
					title='Address'
					textOnly={true}
					text={AddressText}
					displayIcon={addressIcon}
				/>
				<CardComponent
					title='Hours of operations'
					textOnly={true}
					text={HOPText}
					displayIcon={hohIcon}
				/>
				<CardComponent
					title='Social Media & Links'
					textOnly={true}
					displayIcon={socialMediaIcon}
				/>
				<CardComponent
					title='Statement'
					textOnly={true}
					text={StatementText}
					displayIcon={statementIcon}
				/>
			</>
			{isModalOpen && (
				<div
					onClick={toggleModal}
					className='flex justify-end top-0 bottom-0 left-0 right-0 fixed'
				>
					<Modal
						contactData={contactData}
						setContactData={setContactData}
						closeModal={toggleModal}
					/>
				</div>
			)}
		</div>
	);
}

export default InfoSection;
