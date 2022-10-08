/** @format */

import React from "react"
import { useEthers } from "@usedapp/core"
import styles from "./styles"
import { KenoswapLogo } from "./assets"
import { Exchange, WalletButton, Loader } from "./components"
import { usePools } from "./hooks"
const App = () => {
	const { account } = useEthers()
	const [loading, pools] = usePools()
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<header className={styles.header}>
					<img
						src={KenoswapLogo}
						className=' w-16 h-16 object-contain'
						alt='uniswap logo'
					/>
					<WalletButton />
				</header>
				<div className={styles.exchangeContainer}>
					<h1 className={styles.headTitle}>KenoSwap 1.0</h1>
					<p className={styles.subTitle}>Exchange tokens blazing fast!</p>

					<div className={styles.exchangeBoxWrapper}>
						<div className={styles.exchangeBox}>
							<div className='pink_gradient' />
							<div className='blue_gradient' />
							<div className={styles.exchange}>
								{account ? (
									loading ? (
										<Loader title='Loading pools, please wait!' />
									) : (
										<Exchange pools={pools} />
									)
								) : (
									<Loader title='Please connect your wallet' />
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
