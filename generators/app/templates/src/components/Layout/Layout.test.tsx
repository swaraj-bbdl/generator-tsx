import React from 'react'

import { renderWithRedux } from 'utils/test'

import Layout from '.'

describe('Layout component', () => {
	it('renders', () => {
		expect(() => render()).not.toThrow()
	})

	function render() {
		return renderWithRedux(<Layout />)
	}
})
