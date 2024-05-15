import Link from 'next/link'
export default function Header() {
	return (
		<header className='relative text-slate-300 p-5 z-50 border-b border-gray-800'>
			<nav>
				<ul className='flex justify-between'>
					<Link href={'/'}>
						<li className='hover:text-[#5F6A6A] ease-in-out duration-300'>
							Life in Hull
						</li>
					</Link>
					<Link href={'/HullTourism'}>
						<li className='hover:text-[#5F6A6A] ease-in-out duration-300'>
							Hull tourism
						</li>
					</Link>
					<Link href={'/HullCulture'}>
						<li className='hover:text-[#5F6A6A] ease-in-out duration-300'>
							Hull culture
						</li>
					</Link>
					<Link href={'/HullHistory'}>
						<li className='hover:text-[#5F6A6A] ease-in-out duration-300'>
							Hull history
						</li>
					</Link>
				</ul>
			</nav>
		</header>
	)
}
