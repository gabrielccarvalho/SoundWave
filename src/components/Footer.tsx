"use client"

import Link from "next/link"

const Footer = () => {
	return (
		<>
			<hr className='border border-zinc-400 opacity-5' />

			<div className='flex flex-row max-w-7xl my-0 mx-auto py-12 gap-28 justify-between max-[568px]:justify-center max-[568px]:flex-col'>
				<div className='flex flex-col gap-4 justify-between max-[568px]:flex-row max-[568px]:items-center'>
					<Link href='/' className='group flex flex-row items-center'>
						<svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 1600 1200" className='h-12 w-auto -mr-[23px] -ml-7 group-hover:text-indigo-500'>
							<path fill='currentColor' d="M784.5 364.1c-37.2 3.2-72.4 16.6-99 37.4-8.8 6.9-21.2 19.1-20.3 20 .3.3 35.3 12.3 77.9 26.6 42.6 14.3 101.4 34.1 130.7 44.1 31.1 10.5 53.7 17.7 54.2 17.2 1.3-1.3 50.2-95.5 49.8-95.9-.9-.9-38.2-18-47.5-21.9-53.4-21.8-103.2-31.2-145.8-27.5zM633.5 489.2c-1.4 6.7-2.5 19.4-2.5 30.1 0 35.4 8.6 60.3 28.1 81.1 6.3 6.7 18.9 17.2 26 21.4 2 1.2 51 18.1 109 37.6s124.7 42 148.3 50c23.6 8 43.2 14.3 43.6 14.1 1.8-1.1 3.2-22.2 2.7-39.7-1-32.3-7.5-52.7-23.4-73.5-9.4-12.4-15.8-17.6-26-21.1-7.4-2.5-119.1-40.1-269.7-90.8-18.6-6.3-34.3-11.4-34.7-11.4-.5 0-1.1 1-1.4 2.2zM633.9 735.6c-12.6 25.7-22.9 47-22.9 47.5 0 1.2 15.5 9.4 30.4 16.2C701 826.1 776.9 841.2 831 837c50.2-3.8 86.3-16.8 114.8-41.1 4-3.4 7.1-6.6 6.9-7.2-.1-.5-26.8-9.9-59.3-20.8-32.4-11-98.3-33.2-146.4-49.4-48.1-16.2-88.1-29.5-88.8-29.5-.7 0-11.5 20.7-24.3 46.6z"/>
						</svg>
						<p className='text-lg font-sans text-white cursor-pointer'>oundWave</p>
					</Link>
					<div className='flex flex-row gap-8'>
						<a href='https://twitter.com/soundwave_br' target='_blank' rel="noreferrer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path
									d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
							</svg>
						</a>

						<a href='https://www.linkedin.com/in/gabriel-campos-b7618418a/' target='_blank' rel="noreferrer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path
									d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
							</svg>
						</a>

						<a href='https://github.com/gabrielccarvalho' target='_blank' rel="noreferrer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path
									d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
					</div>
				</div>
				<div className='flex flex-row pb-12 max-[568px]:flex-wrap max-[568px]:items-start max-[568px]:text-center max-[568px]:gap-8 max-[568px]:justify-center'>
					<div className='flex flex-col gap-4 ml-20 max-[568px]:ml-0 text-sm max-[568px]:text-md font-sans text-zinc-500 cursor-pointer'>
						<p className='text-sm max-[568px]:text-md font-sans text-white'>Product</p>
						<Link href='/pricing'>
							<p className='hover:text-white'>Pricing</p>
						</Link>
						<Link href='/'>
							<p className='hover:text-white'>Features</p>
						</Link>
					</div>
					<div className='flex flex-col gap-4 ml-20 max-[568px]:ml-0 text-sm max-[568px]:text-md font-sans text-zinc-500 cursor-pointer'>
						<p className='text-sm max-[568px]:text-md font-sans text-white'>Resources</p>
						<p className='hover:text-white'>Contact</p>
						<p className='hover:text-white'>Documentation</p>
					</div>
					<div className='flex flex-col gap-4 ml-20 max-[568px]:ml-0 text-sm max-[568px]:text-md font-sans text-zinc-500 cursor-pointer'>
						<p className='text-sm max-[568px]:text-md font-sans text-white'>Company</p>
						<p className='hover:text-white'>Careers</p>
						<p className='hover:text-white'>About us</p>
						<Link href='/privacy-police'>
							<p className='hover:text-white'>Privacy Police</p>
						</Link>
						<Link href='/terms-of-service'>
							<p className='hover:text-white'>Terms of Service</p>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer
