"use client"

const Header = () => {
	return (
		<>
			<div className='flex flex-col w-full items-center mb-36'>
				<h1 className='mt-32 text-6xl text-center max-[414px]:text-4xl'>Pricing</h1>
				<p className='mt-8 text-xl text-zinc-500 text-center max-w-3xl max-[414px]:text-lg'>Use SoundWave for free with a variety of features. Upgrade to enable unlimited searches, enhanced search options, and additional features.</p>

				<div className='flex flex-row gap-8 mt-48 max-[414px]:flex-col max-[414px]:mt-12'>
					<div className='flex flex-col w-1/3 max-[414px]:w-full border-2 border-gray-800 rounded-2xl px-8 py-16 items-center'>
						<p className='text-lg'>Free</p>
						<p className='text-2xl mt-4'>Free for everyone</p>

						<hr className='border border-gray-800 opacity-80 w-full mt-32  rounded-full' />

						<div className='flex flex-col justify-between h-full'>
							<div className='flex flex-col w-full mt-8 gap-2'>
								<p className='flex flex-row text-sm text-white align-center items-center gap-1 py-2'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								Up to 3 searches per day
								</p>
								<p className='flex flex-row text-sm text-white align-center items-center gap-1 py-2'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								No ads
								</p>
								<p className='flex flex-row text-sm text-white align-center items-center gap-1 py-2'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF0000" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								Specific timestamp results
								</p>
								<p className='flex flex-row text-sm text-white align-center items-center gap-1 py-2'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF0000" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								Update notifications
								</p>
								<p className='flex flex-row text-sm text-white align-center items-center gap-1 py-2'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF0000" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								Priority support
								</p>
								<p className='flex flex-row text-sm text-white align-center items-center gap-1 py-2'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF0000" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								Commercial usage license
								</p>
							</div>

							<button className='group flex flex-row justify-center items-center gap-4 w-[300px] text-sm font-sans bg-gray-800 border border-gray-600 text-white rounded-3xl py-2 transition ease-in-out delay-75 hover:shadow-[0_0_20px_5px_rgba(99,102,241,0.5)] mt-56'>
							Get started with Free
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 2 } stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 group-hover:delay-75 transition duration-75">
									<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
								</svg>
							</button>
						</div>
					</div>

					<div className='flex flex-col w-1/3 max-[414px]:w-full border-2 border-indigo-900 bg-[rgba(255,255,255,0.06)] rounded-2xl px-8 py-16 items-center shadow-inner shadow-[rgba(255,255,255,0.4)]'>
						<p className='text-lg'>Premium</p>
						<p className='text-2xl mt-4 tracking-wider'>$5 per month</p>

						<span className='flex flex-row text-sm mt-14 gap-2 text-white border-2 p-1 rounded-full px-4 border-indigo-800'>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
							</svg>
							Best deal
						</span>

						<hr className='border border-gray-600 opacity-80 w-full mt-12 rounded-full' />

						<div className='flex flex-col justify-between h-full'>
							<div className='flex flex-col w-full mt-8 gap-2'>
								<p className='flex flex-row text-sm text-white align-center items-center gap-1 py-2'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								No ads
								</p>
								<p className='flex flex-row text-sm text-white align-center items-center gap-1 py-2'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								Unlimited searches
								</p>
								<p className='flex flex-row text-sm text-white align-center items-center gap-1 py-2'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								Specific timestamp results
								</p>
								<p className='flex flex-row text-sm text-white align-center items-center gap-1 py-2'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								Update notifications
								</p>
								<p className='flex flex-row text-sm text-white align-center items-center gap-1 py-2'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF0000" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								Priority support
								</p>
								<p className='flex flex-row text-sm text-white align-center items-center gap-1 py-2'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF0000" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								Commercial usage license
								</p>
							</div>

							<button className='group flex flex-row items-center justify-center gap-4 w-[300px] px-0 text-sm font-sans bg-indigo-950 border border-indigo-700 text-white rounded-3xl py-2 transition ease-in-out delay-75 hover:shadow-[0_0_20px_5px_rgba(99,102,241,0.5)] max-[414px]:mt-24'>
							Get started with Premium
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 2 } stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 group-hover:delay-75 transition duration-75">
									<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
								</svg>
							</button>
						</div>
					</div>
					<div className='flex flex-col w-1/3 max-[414px]:w-full border-2 border-gray-800 rounded-2xl px-8 py-16 items-center'>
						<p className='text-lg'>Business</p>
						<p className='text-2xl mt-4 tracking-wider'>$15 per month</p>

						<hr className='border border-gray-800 opacity-80 w-full mt-32 rounded-full' />

						<div className='flex flex-col justify-between h-full'>
							<div className='flex flex-col w-full mt-8 gap-2'>
								<p className='flex flex-row text-sm text-white align-center items-center gap-1 py-2'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								No ads
								</p>
								<p className='flex flex-row text-sm text-white align-center items-center gap-1 py-2'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								Unlimited searches
								</p>
								<p className='flex flex-row text-sm text-white align-center items-center gap-1 py-2'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								Specific timestamp results
								</p>
								<p className='flex flex-row text-sm text-white align-center items-center gap-1 py-2'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								Update notifications
								</p>
								<p className='flex flex-row text-sm text-white align-center items-center gap-1 py-2'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								Commercial usage license
								</p>
								<p className='flex flex-row text-sm text-white align-center items-center gap-1 py-2'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10b981" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								Priority support
								</p>
							</div>


							<button className='group flex flex-row justify-center items-center gap-4 w-[300px] text-sm font-sans bg-white border border-indigo-700 text-black rounded-3xl py-2 transition ease-in-out delay-75 hover:shadow-[0_0_20px_5px_rgba(99,102,241,0.5)] max-[414px]:mt-24'>
								Get started with Business
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 2 } stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 group-hover:delay-75 transition duration-75">
									<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='noise-bg' />
		</>
	)
}

export default Header
