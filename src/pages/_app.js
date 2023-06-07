import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import WindowWrapper from 'layout/WindowWrapper'
import PAGE_CONFIG from 'config/app.router'
import { store } from 'store'
import 'asset/style/app.css'
import 'styles/globals.css'
function App(props) {
    const { Component, pageProps } = props
    const { pathname } = useRouter()

    const getLayout = () => {
        const page = Object?.values(PAGE_CONFIG).find((i) => i.url === pathname)
        if (page) return page.layout
        else return DefaultLayout
    }

    const Layout = getLayout()
    return (
        <Provider store={store}>
            <WindowWrapper>
                {Layout && <Layout {...pageProps} component={Component} />}
            </WindowWrapper>
        </Provider>
    )
}

// App.propTypes = {
//   Component: PropTypes.elementType,
//   pageProps: PropTypes.object
// }

export default App
