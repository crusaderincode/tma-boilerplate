'use client'

import {
	mockTelegramEnv,
	parseInitData,
	retrieveLaunchParams,
} from '@telegram-apps/sdk'
import { useEffect } from 'react'

export const MockTelegram = () => {
	useEffect(() => {
		if (process.env.NEXT_PUBLIC_ENV === 'development') {
			let shouldMock: boolean

			try {
				retrieveLaunchParams()
				shouldMock = !!sessionStorage.getItem('____mocked')
			} catch (_e) {
				shouldMock = true
			}

			if (shouldMock) {
				const initDataRaw = new URLSearchParams([
					[
						'user',
						JSON.stringify({
							id: process.env.NEXT_PUBLIC_MOCK_ID,
							first_name: process.env.NEXT_PUBLIC_MOCK_FIRST_NAME,
							last_name: process.env.NEXT_PUBLIC_MOCK_LAST_NAME,
							username: process.env.NEXT_PUBLIC_MOCK_USERNAME,
							language_code: 'en',
							is_premium: true,
							allows_write_to_pm: true,
						}),
					],
					['hash', process.env.NEXT_PUBLIC_MOCK_HASH!],
					['auth_date', '1612345678'],
					['start_param', 'debug'],
					['chat_type', 'sender'],
					['chat_instance', '1234567890abcdef'],
				]).toString()

				mockTelegramEnv({
					themeParams: {
						accentTextColor: '#a9b1d6',
						bgColor: '#24283b',
						buttonColor: '#7aa2f7',
						buttonTextColor: '#c0caf5',
						destructiveTextColor: '#f7768e',
						headerBgColor: '#24283b',
						hintColor: '#9aa5ce',
						linkColor: '#7dcfff',
						secondaryBgColor: '#1f2335',
						sectionBgColor: '#24283b',
						sectionHeaderTextColor: '#7aa2f7',
						subtitleTextColor: '#9aa5ce',
						textColor: '#c0caf5',
					},
					initData: parseInitData(initDataRaw),
					initDataRaw,
					version: '7.2',
					platform: 'tdesktop',
				})
				sessionStorage.setItem('____mocked', '1')
			}
		}
	}, [])

	return null
}
