import * as React from 'react'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

import Images from './images'
import store from '../../store/store'

Enzyme.configure({ adapter: new Adapter() })

test('Images component should render as expected', () => {
  const wrapper = shallow(<Images />)
  const tree = toJson(wrapper)
  expect(tree).toMatchSnapshot()
})