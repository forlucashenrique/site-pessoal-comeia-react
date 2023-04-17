import { ThemeProvider } from "styled-components"
import { Layout } from "./components/Layout/Layout"
import { theme } from "./theme"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"


export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <About />
        <Projects />
        <Contact />
      </Layout>
    </ThemeProvider>
  )
}


