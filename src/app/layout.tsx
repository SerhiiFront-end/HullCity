import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
	subsets: ['latin'],
	display: 'swap',
})
export const metadata: Metadata = {
	title: 'Hull City',
	description: 'Web-site about Hull',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={oswald.className}>
			<body
				className={`max-w-7xl m-auto  text-white flex-col flex bg-no-repeat bg-cover bg-[url('./background.png')]`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
