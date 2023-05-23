"use client"

import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

const Navbar = () => {
	const { data: session } = useSession()

	return (
		<div className='sticky top-0 right-0 backdrop-blur-xl backdrop-brightness-200 bg-[rgba(23,25,30,0.85)] z-[999] px-3 py-1'>
			<div className='flex flex-row w-full h-14 max-[568px]:h-12 max-w-7xl max-[568px]:max-w-full justify-between align-middle my-0 mx-auto'>
				<div className='flex flex-row items-center gap-8 py-8 max-[568px]:py-0'>
					<Link href='/' className="group flex flex-row items-center">
						<p className='text-md max-[568px]:text-[12px] font-sans text-white cursor-pointer'>SoundWave</p>
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
				{!session ? (
					<div className='flex flex-row items-center gap-6'>
						<button
							className='text-md max-[568px]:hidden max-[568px]:py-12 font-sans bg-indigo-700 border border-indigo-700 text-white rounded-3xl px-4 py-0.5 transition ease-in-out delay-75 hover:shadow-[0_0_20px_5px_rgba(99,102,241,0.5)]'
							onClick={() => signIn("google")}
						>
								Sign in
						</button>
					</div>
				) : (
					<div className='flex flex-row items-center gap-4'>
						<div className='flex flex-row gap-2 items-center'>
							{session.user && session.user.image && <Image src={session.user.image} alt={String(session.user.name)} width={30} height={30} className='rounded-full' />}
							{/* <p>{session.user?.name?.split(" ")[0]}</p> */}
						</div>
						<button
							className='group flex flex-row items-center gap-1 text-md max-[568px]:text-[12px] font-sans text-white rounded-md p-0 hover:text-red-500'
							onClick={() => signOut()}
						>
							Log out
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 group-hover:text-red-500">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
							</svg>

						</button>
					</div>
				)}
			</div>
			<hr className='border border-zinc-400 opacity-5' />
		</div>
	)
}

export default Navbar
