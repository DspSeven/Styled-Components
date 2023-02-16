import {Heading, CustomButton} from './styledComponents'
import './App.css'

const App = () => (
  <div>
    <Heading>Hello World</Heading>
    <CustomButton type="button" outline={false}>
      Click
    </CustomButton>
    <CustomButton type="button" outline={true}>
      Click
    </CustomButton>
  </div>
)

export default App
