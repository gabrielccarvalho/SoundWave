"use client"

import Image from "next/image"
import Link from "next/link"

const Header = () => {
	return (
		<>
			<div className='flex flex-col w-full items-center'>
				<a href='https://forms.gle/nGbTG3wK2khauML78' target='_blank' rel="noreferrer">
					<button className='group mt-28 max-[568px]:mt-12 max-[568px]:text-xs flex flex-row gap-2 text-sm py-2 px-4 rounded-full items-center bg-[rgba(99,102,241,0.15)] from-indigo-600 via-purple-400 to-pink-600 hover:bg-gradient-to-r border-[1px] border-indigo-900 text-white hover:text-bold'>
						Subscribe for our closed beta
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 group-hover:delay-75 transition duration-75">
							<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>
					</button>
				</a>

				<h1 className='inline mt-8 text-7xl max-[568px]:text-4xl max-w-3xl text-center'>Search your content effortless<span className='text-transparent bg-clip-text bg-gradient-to-t from-indigo-600 via-purple-400 to-pink-600"'> using AI</span></h1>
				<p className='mt-8 text-xl max-[568px]:text-sm text-zinc-500 max-w-xl text-center'>Meet a new a powerful video search engine that will help you find your videos faster.</p>

				<Link href='/pricing'>
					<button
						className='
							mt-8
							text-md
							font-sans
							bg-indigo-700
							border
							border-indigo-700
							text-white
							rounded-3xl
							px-4
							py-3
							transition
							ease-in-out
							hover:shadow-[0_0_20px_5px_rgba(99,102,241,0.5)]
							flex
							gap-2
							items-center
							group
							max-[568px]:text-[0.75rem]
							max-[568px]:px-3
							max-[568px]:py-2
						'>
						Get started
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 2 } stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 group-hover:delay-75 transition duration-75">
							<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>
					</button>
				</Link>

				<div className='border-animation-gradient mt-36 max-[568px]:hidden'>
					<Image
						src='/safari.webp'
						alt='App Image'
						width={ 1300 }
						height={ 1300 }
						className='rounded-3xl p-1 opacity-50'
					/>
				</div>

				<div className='noise-bg'></div>
			</div>
		</>
	)
}

export default Header
