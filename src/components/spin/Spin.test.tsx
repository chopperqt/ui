import React from 'react'
import { render, screen } from '@testing-library/react'

import Spin from './Spin'

describe('Testing Spin component', () => {
    test('render Spin component', () => {
        render(<Spin isLoading={true} />)

        const element = screen.queryByTestId('spin-wrapper')

        expect(element).toBeInTheDocument()
    })

    test('Test props loading = true', () => {
        render(<Spin isLoading={true} />)

        const loading = screen.queryByTestId('spin-layout')


        expect(loading).toBeInTheDocument()
    })

    test('Test props loading = false', () => {
        render(<Spin isLoading={false} />)

        const loading = screen.queryByTestId('spin-layout')

        expect(loading).not.toBeInTheDocument()
    })

    test('Test props size = small', () => {
        render(
            <Spin
                isLoading={true}
                size="small"
            />
        )

        const element = screen.queryByTestId('spin')

        expect(element).toHaveClass('spin-size--small')
    })

    test('Test props size = middle', () => {
        render(
            <Spin
                isLoading={true}
                size="middle"
            />
        )

        const element = screen.queryByTestId('spin')

        expect(element).toHaveClass('spin-size--middle')
    })

    test('Test props size = large', () => {
        render(
            <Spin
                isLoading={true}
                size="large"
            />
        )

        const element = screen.queryByTestId('spin')

        expect(element).toHaveClass('spin-size--large')
    })
})




