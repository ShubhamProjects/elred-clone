import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

const EmailComponent = ({ emailText, onEmailTextChange }) => (
	<>
		<h1 className='mt-2 mb-3 font-medium text-sm'>Email Id</h1>
		<input
			type='text'
			className='bg-gray-50 rounded-md w-full pl-3 mt-2 mb-3 pt-3 pb-3 '
			placeholder='eg. salesteam@br.in'
			onChange={(e) => onEmailTextChange(e)}
			value={emailText}
		/>
		<button className='flex rounded-md pt-3 pb-3 items-center justify-center bg-red-50 w-full'>
			<PlusCircleIcon className='w-5 h-5 text-red-600 mr-3' />
			<h1 className='font-bold text-base text-red-600'>Add More</h1>
		</button>
	</>
);

const ContactNumberComponent = ({ contactNumber, onNumberChange }) => (
	<>
		<h1 className='font-medium text-sm'>Contact Number</h1>
		<input
			type='number'
			className='bg-gray-50 rounded-md w-full pl-3 mt-3 mb-6 pt-3 pb-3 '
			placeholder='eg. 1234567890'
			onChange={(e) => onNumberChange(e)}
			value={contactNumber}
		/>
		<button className='flex rounded-md pt-3 pb-3 items-center justify-center bg-red-50 w-full'>
			<PlusCircleIcon className='w-5 h-5 text-red-600 mr-3' />
			<h1 className='font-bold text-base text-red-600'>Add More</h1>
		</button>
	</>
);

function EditingFields({
	emailText,
	onEmailTextChange,
	contactNumber,
	onNumberChange,
}) {
	return (
		<div className='mt-6'>
			<div className='mt-4 mb-8'>
				<EmailComponent
					emailText={emailText}
					onEmailTextChange={onEmailTextChange}
				/>
			</div>
			<div className='mt-4 mb-4'>
				<ContactNumberComponent
					contactNumber={contactNumber}
					onNumberChange={onNumberChange}
				/>
			</div>
		</div>
	);
}

export default EditingFields;
