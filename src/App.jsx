import { ThemeProvider } from "styled-components"
import { Layout } from "./components/Layout/Layout"
import { theme } from "./theme"


export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Layout/>
    </ThemeProvider>
  )
}


