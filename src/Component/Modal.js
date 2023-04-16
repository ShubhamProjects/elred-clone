import React, { useState } from 'react';
import CardComponent from './CardComponent';
import EditingFields from './EditingFields';
import { ArrowLeftIcon, BookOpenIcon } from '@heroicons/react/24/solid';

const contactIcon = <BookOpenIcon className='text-gray-300 h-6 w-6 mr-3' />;

function Modal({ contactData, setContactData, closeModal }) {
	const [isEdit, setIsEdit] = useState(false);
	const [editedData, setEditedData] = useState();
	const [emailText, setEmailText] = useState('');
	const [contactNumber, setContactNumber] = useState('');

	//enables editing fields and sets the data which got enabled for editing
	const onEditClick = (index) => {
		setIsEdit(true);
		setEditedData(contactData[index]);
	};

	//on back icon press sets edit mode false if enabled or closes the pop up
	const onBackClick = () => {
		isEdit ? setIsEdit(false) : closeModal();
	};

	//sets email id entered
	const onEmailTextChange = (e) => {
		setEmailText(e.target.value);
	};

	//sets mobile no entered
	const onNumberChange = (e) => {
		setContactNumber(e.target.value);
	};

	const onSaveClick = () => {
		//enables save button only if edit mode is on
		if (isEdit) {
			//finds the index of the object the got clicked for editing
			const ind = contactData.indexOf(editedData);

			//copying existing email for adding new entered emails
			let tempEmailData = [...editedData.email];
			//copying existing number for adding new entered numbers
			let tempContactNumberData = [...editedData.number];

			//adding new emails entered
			tempEmailData.push(emailText);
			//adding new numbers entered
			tempContactNumberData.push(contactNumber);

			//copying selected editing object
			let tempEditedData = editedData;

			//adding new value of email at edit object
			tempEditedData['email'] = tempEmailData;
			//adding new value of number at edit object
			tempEditedData['number'] = tempContactNumberData;

			//updating new edited object
			setEditedData(tempEditedData);

			//copying existing non edited list of data
			let tempContactedData = [...contactData];

			//iterating through the array and finding & repalacing the object which got edited
			for (let i = 0; i <= tempContactedData.length; i++) {
				if (i === ind) {
					tempContactedData[i] = editedData;
				}
			}
			//updating the list of data
			setContactData(tempContactedData);

			//resetting all the fields
			setIsEdit(false);
			setEmailText('');
			setContactNumber('');
			setEditedData();
		}
	};

	const onDeleteClick = (index) => {
		//copying existing non deleted list of data
		let tempContactedData = [...contactData];
		//filter and remove data which got clicked for deletion
		tempContactedData = tempContactedData.filter((item, i) => i !== index);
		//updates the list
		setContactData(tempContactedData);
	};

	return (
		<div
			onClick={(e) => e.stopPropagation()}
			className='p-10 w-[33%] bg-white border-l flex flex-col display shadow overflow-scroll'
		>
			<div className='flex items-center'>
				<button className='mr-4' onClick={onBackClick}>
					<ArrowLeftIcon className='text-black h-5 w-6 ' />
				</button>
				<p className='text-black font-semibold text-2xl'>Contacts</p>
			</div>
			<h1 className='mt-4 text-gray-500 mb-8'>
				Please provide company's email & contacts
			</h1>
			<div>
				{isEdit ? (
					<EditingFields
						emailText={emailText}
						onEmailTextChange={onEmailTextChange}
						contactNumber={contactNumber}
						onNumberChange={onNumberChange}
					/>
				) : (
					<>
						{contactData &&
							contactData.map((item, i) => (
								<CardComponent
									title={item.name}
									textOnly={false}
									onEditClick={onEditClick}
									displayIcon={contactIcon}
									data={item}
									index={i}
									onDeleteClick={onDeleteClick}
									section='Modal'
								/>
							))}
					</>
				)}
			</div>
			<div className='mt-10 flex flex-col h-screen justify-end'>
				<button
					onClick={onSaveClick}
					className='w-full p-3 items-center bg-red-700 rounded-lg'
				>
					<h1 className='text-white font-semibold'>Save</h1>
				</button>
			</div>
		</div>
	);
}

export default Modal;
