import Link from 'next/link'
export default function Header() {
	return (
		<header className='relative text-slate-300 md:py-5 z-50 border-b border-gray-800'>
			<nav>
				<ul className='flex justify-between'>
					<Link href={'/'}>
						<li className='hover:text-[#5F6A6A] ease-in-out duration-300'>
							Home
						</li>
					</Link>
					<Link href={'/help'}>
						<li className='hover:text-[#5F6A6A] ease-in-out duration-300'>
							Help
						</li>
					</Link>
					<Link href={'/about'}>
						<li className='hover:text-[#5F6A6A] ease-in-out duration-300'>
							About Us
						</li>
					</Link>
					<Link href={'/support'}>
						<li className='hover:text-[#5F6A6A] ease-in-out duration-300'>
							Support
						</li>
					</Link>
				</ul>
			</nav>
		</header>
	)
}
