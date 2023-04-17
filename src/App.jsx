import { ThemeProvider } from "styled-components"
import { Layout } from "./components/Layout/Layout"
import { theme } from "./theme"
import { About } from "./components/About"
import { Projects } from "./components/Projects"


export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <About />
        <Projects />
      </Layout>
    </ThemeProvider>
  )
}


