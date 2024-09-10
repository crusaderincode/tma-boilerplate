'use client'

import { SDKProvider } from '@tma.js/sdk-react'
import type { PropsWithChildren } from 'react'
import { InitTelegram } from './init-telegram'
import { MockTelegram } from './mock-telegram'

export const Telegram = ({ children }: PropsWithChildren) => {
	return (
		<SDKProvider
			acceptCustomStyles
			debug={process.env.NEXT_PUBLIC_ENV === 'development'}
		>
			<InitTelegram />
			<MockTelegram />
			{children}
		</SDKProvider>
	)
}
