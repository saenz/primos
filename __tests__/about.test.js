/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import About from '../pages/about'

const location = { pathname: '/about/' };

describe('With Enzyme', () => {
  it('About shows "About"', () => {
    const app = shallow(<About location={ location } />)

    expect(app.find('h5').text()).toEqual('About')
  })
})

// describe('With Snapshot Testing', () => {
//   it('About shows "About"', () => {
//     const component = renderer.create(<About location={ location } />)
//     const tree = component.toJSON()
//     expect(tree).toMatchSnapshot()
//   })
// })
