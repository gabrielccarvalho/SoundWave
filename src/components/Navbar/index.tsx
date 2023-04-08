"use client"

import Link from "next/link"

const Navbar = () => {
	return (
		<div className='sticky top-0 right-0 backdrop-blur-xl backdrop-brightness-200 bg-[rgba(0,2,18,0.85)] z-[999]'>
			<div className='flex flex-row w-full h-14 max-[568px]:h-12 max-w-7xl max-[568px]:max-w-full justify-between align-middle my-0 mx-auto'>
				<div className='flex flex-row items-center gap-8 py-8 max-[568px]:py-0'>
					<Link href='/' className="group flex flex-row items-center">
						<svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 1600 1200" className='h-11 w-auto -mr-[20px] max-[568px]:h-9 max-[568px]:-mr-[17px] -ml-7 group-hover:text-indigo-500'>
							<path fill='currentColor' d="M784.5 364.1c-37.2 3.2-72.4 16.6-99 37.4-8.8 6.9-21.2 19.1-20.3 20 .3.3 35.3 12.3 77.9 26.6 42.6 14.3 101.4 34.1 130.7 44.1 31.1 10.5 53.7 17.7 54.2 17.2 1.3-1.3 50.2-95.5 49.8-95.9-.9-.9-38.2-18-47.5-21.9-53.4-21.8-103.2-31.2-145.8-27.5zM633.5 489.2c-1.4 6.7-2.5 19.4-2.5 30.1 0 35.4 8.6 60.3 28.1 81.1 6.3 6.7 18.9 17.2 26 21.4 2 1.2 51 18.1 109 37.6s124.7 42 148.3 50c23.6 8 43.2 14.3 43.6 14.1 1.8-1.1 3.2-22.2 2.7-39.7-1-32.3-7.5-52.7-23.4-73.5-9.4-12.4-15.8-17.6-26-21.1-7.4-2.5-119.1-40.1-269.7-90.8-18.6-6.3-34.3-11.4-34.7-11.4-.5 0-1.1 1-1.4 2.2zM633.9 735.6c-12.6 25.7-22.9 47-22.9 47.5 0 1.2 15.5 9.4 30.4 16.2C701 826.1 776.9 841.2 831 837c50.2-3.8 86.3-16.8 114.8-41.1 4-3.4 7.1-6.6 6.9-7.2-.1-.5-26.8-9.9-59.3-20.8-32.4-11-98.3-33.2-146.4-49.4-48.1-16.2-88.1-29.5-88.8-29.5-.7 0-11.5 20.7-24.3 46.6z"/>
						</svg>
						<p className='text-md max-[568px]:text-[12px] font-sans text-white cursor-pointer'>oundWave</p>
					</Link>
					{/* <Link href='/'>
						<p className='cursor-pointer text-sm font-sans hover:text-zinc-400'>Features</p>
					</Link> */}
					<Link href='/pricing'>
						<p className='cursor-pointer text-md max-[568px]:text-[12px] font-sans hover:text-zinc-400'>Pricing</p>
					</Link>
					{/* <Link href='/'>
						<p className='cursor-pointer text-sm font-sans hover:text-zinc-400'>Company</p>
					</Link> */}
				</div>
				<div className='flex flex-row items-center gap-6'>
					<button className='text-md max-[568px]:text-[12px] font-sans text-white rounded-md p-0 hover:text-zinc-400'>
            Log in
					</button>
					<button
						className='text-md max-[568px]:hidden max-[568px]:py-12 font-sans bg-indigo-700 border border-indigo-700 text-white rounded-3xl px-4 py-0.5 transition ease-in-out delay-75 hover:shadow-[0_0_20px_5px_rgba(99,102,241,0.5)]'
					>
            Sign up
					</button>
				</div>
			</div>
			<hr className='border border-zinc-400 opacity-5' />
		</div>
	)
}

export default Navbar
