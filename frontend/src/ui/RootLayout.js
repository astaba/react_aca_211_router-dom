import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'

import MainNavigation from '../components/MainNavigation'

const RootLayout = () => {
  const navigation = useNavigation();
  console.log(navigation)
  
  return (
    <React.Fragment>
      <MainNavigation />
      <main>
      {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </React.Fragment>
  )
}

export default RootLayout