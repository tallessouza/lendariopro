'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

const Topbar = () => {
  return (
    <>
      <ProgressBar
        height='2px'
        color="#d7b97fFF"
        options={{ showSpinner: false }}
        shallowRouting />
    </>)
}

export default Topbar
