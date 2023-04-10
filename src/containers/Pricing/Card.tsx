"use client"

const Card = () => {
	return (
		<div className='flex flex-row justify-between items-center max-w-4xl mx-auto rounded-3xl my-32'>
			<div className='flex flex-row max-[568px]:flex-col max-[568px]:p-6 items-center justify-between border-animation-gradient w-full h-full py-20 px-16 rounded-3xl'>
				<div className='flex flex-col'>
					<div className='flex flex-row w-full items-center gap-2 p-0 m-0 max-[568px]:justify-center'>
						<h2 className='text-2xl max-[568px]:text-md text-white'>SoundWave</h2><h2 className='text-2xl max-[568px]:text-md text-transparent bg-clip-text bg-gradient-to-t from-indigo-600 via-purple-400 to-pink-600"'>Business</h2>
					</div>
					<p className='text-gray-400 text-md font-sans max-w-sm mt-8 max-[568px]:text-center'>Built for podcasts who want to easily create a Youtube channel with your cuts easier. <br /> SoundWave Business offers advanced features, powerful admin controls and more.</p>
				</div>
				<div>
					<button className='group flex flex-row max-[568px]:mt-8 max-[568px]:text-sm gap-2 items-center text-md font-sans bg-indigo-700 border border-indigo-700 text-white rounded-3xl px-5 py-3 transition ease-in-out delay-75 hover:shadow-[0_0_20px_5px_rgba(99,102,241,0.5)]'>
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:animate-pulse max-[568px]:w-5 max-[568px]:h-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
						</svg>
            Contact Sales
					</button>
				</div>
			</div>
		</div>
	)

}

export default Card
