import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import {
  Grommet,
  Box,
  Heading,
  Button,
  Text,
  Markdown,
  Paragraph
} from 'grommet'
const ReactJson = dynamic(import('react-json-view'), { ssr: false })
import 'isomorphic-fetch'
const theme = {
  global: {
    colors: {
      brand: '#C31D4A'
    },
    font: {
      family: 'Helvetica'
    }
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { pi: '' }
  }
  getPi = () => {
    var data = null
    var xhr = new XMLHttpRequest()
    let set = n => {
      this.setState({ pi: n })
    }
    xhr.addEventListener('readystatechange', function() {
      if (this.readyState === this.DONE) {
        set(this.responseText)
        console.log(this.responseText)
      }
    })
    xhr.open('GET', 'https://pi.now.sh/api/p?n=9')
    xhr.send(data)
  }
  componentDidMount() {
    this.getPi()
  }
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>πaas</title>
        </Head>
        <Grommet theme={theme}>
          <Box
            animation="fadeIn"
            align="center"
            margin="large"
            alignContent="center"
          >
            <Heading margin="small" textAlign="center">
              Pi as a Service
            </Heading>
            <Heading level={2} textAlign="center" margin="medium">
              PaaS
            </Heading>

            <Box
              direction="row-responsive"
              pad="medium"
              align="center"
              alignContent="center"
              animation="zoomIn"
              basis="full"
            >
              <Button
                label="Learn more"
                color="brand"
                margin="medium"
                hoverIndicator
                primary
                onClick={() => window.scrollTo(0, window.innerHeight)}
              />
              <Button
                label="Github"
                color="brand"
                margin="medium"
                hoverIndicator
                primary
                href="https://github.com/joshkmartinez/Pi-as-a-Service"
              />
            </Box>
            <Box
              direction="row-responsive"
              pad="medium"
              align="center"
              alignContent="center"
              animation="zoomIn"
              basis="full"
            >
              <Box pad="medium" basis="1/3">
                <Markdown>{p1}</Markdown>
              </Box>
              <Box pad="medium" basis="1/3">
                <Markdown>{p2}</Markdown>
              </Box>
              <Box pad="medium" basis="1/3">
                <Markdown>{p3}</Markdown>
              </Box>
            </Box>
            <Box
              pad="small"
              align="center"
              alignContent="center"
              animation="zoomIn"
              basis="full"
            >
              <Box pad="medium" basis="2/3" align="center">
                <Markdown>{example}</Markdown>
              </Box>
            </Box>
            <Box
              direction="row"
              align="center"
              alignContent="center"
              animation="zoomIn"
            >
              <Box pad="medium" basis="1/2" align="center" width="medium">
                <Markdown>{request}</Markdown>
              </Box>
              <Box basis="1/2" align="center" width="medium">
                <Markdown>{response}</Markdown>
                <Text>{this.state.pi}</Text>
              </Box>
            </Box>
            <Box
              direction="row-responsive"
              align="center"
              alignContent="center"
              animation="zoomIn"
              basis="1"
            >
              <Box pad="medium" basis="1/2" width="medium" align="center">
                <Markdown>{docs}</Markdown>
              </Box>
              <Box pad="medium" basis="1/2" align="center">
                <Markdown>{domains}</Markdown>
              </Box>
            </Box>
          </Box>
        </Grommet>
      </React.Fragment>
    )
  }
}

const p1 = `
### About  
Pi as a Service, or **PaaS**, is an API that returns *\`x\`* decimals of **π**
`
const p2 = `
### Simple as can be  
The PaaS API is super easy to use. Check out the example below.
`
const p3 = `
### What would this be used for?
I don't know.  
[You want a *billion* digits of π ?](https://pi.now.sh/api/p?n=1000000000)  
To many? [How about 1 *million* ?](https://pi.now.sh/api/p?n=1000000)
`
const example = `
### Check this out!
Its really easy to get started. No fancy-shmacy API keys or authentication.  
Just send a \`GET\` request to \`pi.now.sh/api/p\`  
**Take a look:**  
`
const request = `
#### Request:  
**GET** \`/p?n=9\`
`
const response = `
#### Response:  
`
const docs = `
## Endpoints:
**GET**   **\`/api/p?n=x\`**  
- This will return \`x\` decimals of pi.  
- If n is not defined 9 decimals of pi will be returned.  
- If n is a negative number no decimals will be returned. In other words, \`3\` is returned.  
- Alias endpoints: **\`/api/pie\`** *&* **\`/api/pi\`**
`
const domains = `
## Domains:
This service is available at all of the following domains.
The api is available at \`/api\`  
[pi.now.sh](https://pi.now.sh)  
[paas.now.sh](https://paas.now.sh)  
[piAsAService.now.sh](https://piAsAService.now.sh)  
`
export default App
