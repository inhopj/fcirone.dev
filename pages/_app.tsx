import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { motion } from 'framer-motion';

// TODO - cleanup animation stuff and remove framer-motion dep from package.json
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    // <motion.div
    //   key={router.route}
    //   initial="initial"
    //   animate="animate"
    //   variants={{
    //     initial: {
    //       opacity: 1,
    //     },
    //     animate: {
    //       opacity: 0.97,
    //     }
    //   }}
    // >
    //   <Component {...pageProps} />
    // </motion.div>
    <Component {...pageProps} />
  )
}

export default MyApp
