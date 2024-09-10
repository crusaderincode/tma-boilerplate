import { useMiniApp, useViewport } from '@tma.js/sdk-react'

export const InitTelegram = () => {
	const ma = useMiniApp(true)
	const vp = useViewport(true)

	ma?.ready()
	vp?.expand()
	ma?.setBgColor('#24283b')
	ma?.setHeaderColor('#7aa2f7')

	return null
}
