// const add = () => 2 + 2
import {render, screen } from '@testing-library/react'
import Index from '../src/pages/index'

describe('Index', () => {

    describe('Component', () => {
        it('se renderiza', () => {
             const { getByTestId } = render(
                <Index pokemones={[]}/>
             )

            //  const paragraph = screen.getByText('Mi App de Pokemones')
            //  const paragraph = screen.getByTestId('titulo')
             const paragraph = getByTestId('titulo')
            
            //  console.log(paragraph)
             expect(paragraph).toBeInTheDocument()
        })
    })

    describe('getStaticProps', () => {
        // it('suma 2 + 2', () => {
        //     expect(add()).toBe(4)
        // })
    })

})