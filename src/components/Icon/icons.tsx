import React, { Suspense, lazy } from 'react';


const Close = lazy(() => import('./icons/Close'));
const Settings = lazy(() => import('./icons/Settings'));
const Loading = lazy(() => import('./icons/Loading'));
const SmallTick = lazy(() => import('./icons/Small-tick'))

export type IconNames = keyof typeof Icons;

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
  ),
  SmallTick: (
    <Suspense>
      <SmallTick />
    </Suspense>
  )

} as const
