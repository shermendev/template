let _homeRoute

if (process.env.NODE_ENV !== `production`) {
  _homeRoute = `/`
} else {
  _homeRoute = `/`
}

export const homeRoute = _homeRoute
