import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0.95,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  )
}

export default MyApp
