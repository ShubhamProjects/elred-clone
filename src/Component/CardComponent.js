import React from 'react';
import {
	PencilIcon,
	PhoneIcon,
	CreditCardIcon,
	TrashIcon,
	BanknotesIcon,
	GlobeAltIcon,
	PresentationChartLineIcon,
	ComputerDesktopIcon,
} from '@heroicons/react/24/solid';

function CardComponent({
	title,
	textOnly,
	text,
	onEditClick,
	displayIcon,
	data,
	index,
	onDeleteClick,
	section,
	allData,
}) {
	const { email } = data ?? [];
	const { number } = data ?? [];

	return (
		<div className='border border-gray-200 h-44 rounded-lg p-4 mt-4 m-2'>
			<div className='flex justify-between items-center mb-6'>
				<span className='flex items-center'>
					{displayIcon}
					<p className='font-semibold text-xl'>{title}</p>
				</span>
				<span>
					{section === 'Modal' && (
						<button onClick={() => onDeleteClick(index)}>
							<TrashIcon className='h-4 w-4 mr-3 text-red-600' />
						</button>
					)}
					<button
						disabled={
							title !== 'Contact' &&
							title !== 'SalesTeam' &&
							title !== 'MarketingTeam'
						}
						onClick={() => onEditClick(index)}
					>
						<PencilIcon className='h-4 w-4 text-red-600' />
					</button>
				</span>
			</div>

			<div className='flex justify-between items-baseline mt-10'>
				<span className='flex flex-[0.9] items-baseline'>
					{!textOnly && (
						<CreditCardIcon className='h-4 w-4 text-gray-300 mr-3' />
					)}

					<p className='font-medium text-gray-500 flex-wrap text-sm '>
						{!textOnly
							? email &&
							  email.map((mail, i) => {
									return `${mail} ${i < email.length - 1 ? '/' : ''} `;
							  })
							: text}
					</p>
				</span>

				{(!textOnly || title === 'Statement') && (
					<div className='bg-red-50 rounded-full items-center justify-center p-2'>
						<p className='text-red-600 text-xs font-medium'>
							{title === 'Contact'
								? allData.length > 1
									? `+ ${allData.length - 1}`
									: ''
								: '+ 1'}
						</p>
					</div>
				)}
			</div>
			{title.includes('Social') && (
				<div className='flex justify-evenly'>
					<div className='flex flex-col items-center'>
						<GlobeAltIcon className='h-8 w-8 text-gray-300' />
						<h1 className='text-xs font-medium text-gray-500'>Web</h1>
					</div>
					<div className='flex flex-col items-center'>
						<ComputerDesktopIcon className='h-8 w-8 text-gray-300' />
						<h1 className='text-xs font-medium text-gray-500'>Instagrama</h1>
					</div>
					<div className='flex flex-col items-center'>
						<PresentationChartLineIcon className='h-8 w-8 text-gray-300' />
						<h1 className='text-xs font-medium text-gray-500'>Facebook</h1>
					</div>
					<div className='flex flex-col items-center'>
						<BanknotesIcon className='h-8 w-8 text-gray-300' />
						<h1 className='text-xs font-medium text-gray-500'>Twitter</h1>
					</div>
				</div>
			)}
			{!textOnly && (
				<div className='flex justify-between items-center mt-3'>
					<span className='flex items-center'>
						<PhoneIcon className='h-4 w-4 text-gray-300 mr-3' />
						<p className='font-medium text-gray-500 flex-wrap text-sm'>
							{number &&
								number.map((num, i) => {
									return `${num} ${i < number.length - 1 ? '/' : ''} `;
								})}
						</p>
					</span>
				</div>
			)}
		</div>
	);
}

export default CardComponent;
