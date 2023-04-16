import React from 'react';
import {
	MagnifyingGlassIcon,
	ShoppingCartIcon,
	ChevronDownIcon,
} from '@heroicons/react/24/outline';

function Header() {
	return (
		<div className='flex flex-row bg-white pt-3 pb-3'>
			<div className='flex-[0.2] flex justify-center items-center'>
				<img
					src={require('../logo.jpg')}
					alt={'Company Logo'}
					className='h-16 w-16'
				/>
				<h1 className='text-xs font-medium'>A.T. Inks</h1>
			</div>

			<div className='flex-[0.4] mr-60 flex flex-col rounded-xl bg-slate-100 justify-center'>
				<div className='flex ml-4'>
					<MagnifyingGlassIcon className='h-8 w-8 text-gray-300' />
					<input
						placeholder='Search...'
						type='text'
						className='bg-transparent outline-transparent w-full ml-4 font-base placeholder:text-black placeholder:text-xs placeholder:font-semibold'
					/>
				</div>
			</div>

			<div className='flex-[0.4] flex items-center justify-evenly'>
				<button className='flex items-center bg-gray-800 rounded-md pt-2 pb-2 pl-7 pr-7'>
					<ShoppingCartIcon className='h-6 w-6 text-white mr-4' />
					<span className='text-white text-sm font-semibold'>
						Checkout (200)
					</span>
				</button>

				<button className='flex items-center'>
					<img
						src={require('../ProfileIcon.jpeg')}
						alt='Checkout'
						className='h-10 w-10 mr-4 rounded-full'
					/>
					<h1 className='font-medium'>User Admin</h1>
					<ChevronDownIcon className='h-4 w-4 ml-3 text-black' />
				</button>
			</div>
		</div>
	);
}

export default Header;
