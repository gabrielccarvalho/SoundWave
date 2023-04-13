"use client"

const Privacy = () => {
	return (
		<>
			<div className='flex flex-col max-w-5xl mx-auto mb-36 text-xl'>
				<p>At SoundWave, we are committed to protecting the privacy of our users. This privacy policy describes how we collect, use, and disclose the information we receive from users of our software. By using our software, you consent to our collection and use of your information as described in this policy.</p>
				<h2 className='text-4xl font-extrabold my-8'>Information we collect</h2>
				<p>We may collect the following information from users:</p>
				<ul className='flex flex-col mt-4 list-decimal ml-10 gap-4 text-md'>
					<li>User email: We collect user email addresses to allow users to log in to our platform, and if the user chooses, to subscribe to our newsletter and receive marketing and update emails from us.</li>
					<li>User name and photo: We collect user names and photos to display on the user&apos;s profile.</li>
					<li>User browser data and location: We collect user browser data and location to offer content accordingly to the user&apos;s hardware and location, such as language and platform software (mobile or desktop).</li>
					<li>User Google Data: We collect user Google data to provide accurate results based on the user&apos;s interests.</li>
				</ul>
				<h2 className='text-4xl font-extrabold my-8'>How we use the information we collect</h2>
				<p>We may use the information we collect from users for the following purposes:</p>
				<ul className='flex flex-col mt-4 list-decimal ml-10 gap-4 text-md'>
					<li>To provide users with access to our platform and its features;</li>
					<li>To personalize the user&apos;s experience on our platform;</li>
					<li>To communicate with users, including sending marketing and update emails if the user chooses to subscribe to our newsletter;</li>
					<li>To improve our software and services;</li>
					<li>To comply with legal obligations.</li>
				</ul>
				<h2 className='text-4xl font-extrabold my-8'>How we share the information we collect</h2>
				<p>We may share the information we collect from users with the following third parties:</p>
				<ul className='flex flex-col mt-4 list-decimal ml-10 gap-4 text-md'>
					<li>Service providers: We may share information with third-party service providers that help us operate our platform and provide our services, such as hosting providers and email marketing services.</li>
					<li>Business partners: We may share information with business partners who help us offer our services, such as music providers.</li>
					<li>Legal requirements: We may share information when we are legally required to do so, such as in response to a court order or subpoena.</li>
				</ul>
				<h2 className='text-4xl font-extrabold my-8'>Your rights</h2>
				<p>You have the right to access, modify, or delete your personal information at any time. You can contact us at <span className='font-bold text-blue-500'>contact@soundwave.com.br</span> to request access to your information or to make changes to it.</p>
				<h2 className='text-4xl font-extrabold my-8'>Security</h2>
				<p>We take reasonable measures to protect the information we collect from users against unauthorized access, disclosure, or destruction. However, no data transmission over the internet or electronic storage system can be guaranteed to be 100% secure. Therefore, we cannot guarantee the security of the information we collect from users.</p>
				<h2 className='text-4xl font-extrabold my-8'>Changes to this policy</h2>
				<p>We may update this privacy policy from time to time. We will post any changes to this policy on our website and update the date at the top of the policy. Your continued use of our software after we make changes to this policy constitutes your acceptance of the changes.</p>
				<h2 className='text-4xl font-extrabold my-8'>Contact us</h2>
				<p>If you have any questions or concerns about our privacy policy, please contact us at <span className='font-bold text-blue-500'>contact@soundwave.com.br</span>.</p>
			</div>
		</>
	)
}

export default Privacy
