import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Telegram } from './_providers/telegram'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'TMA Boilerplate',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} max-w-[640px] h-[100dvh] mx-auto flex flex-col items-center justify-center`}
			>
				<Telegram>{children}</Telegram>
			</body>
		</html>
	)
}
