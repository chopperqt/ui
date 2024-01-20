import React, { Suspense, lazy } from 'react';


const Close = lazy(() => import('./icons/Close'));
const Settings = lazy(() => import('./icons/Settings'));
const Loading = lazy(() => import('./icons/Loading'));

export const Icons = {
  Settings: (
    <Suspense>
      <Settings />
    </Suspense>
  ),
  Close: (
    <Suspense>
      <Close />
    </Suspense>
  ),
  Loading: (
    <Suspense>
      <Loading />
    </Suspense>
  )

} as const
