import React from 'react'
import { mount } from 'enzyme'

import App from '../client/components/App'

test('<App />', () => {
  const expected = 'Support businesses that pay their people a living wage'
  const wrapper = mount(<App />)
  expect(wrapper.text()).toMatch(expected)
})
