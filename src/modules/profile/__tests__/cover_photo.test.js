import React from 'react';
import CoverPhoto from '../components/cover_photo'
import renderer from 'react-test-renderer'

describe("Will test the coverphoto component", () => {

    it('renders de cover photo nicely', () => {
        const tree = renderer.create(
            <CoverPhoto photo="https://www.papeldeparede.etc.br/fotos/wp-content/uploads/gatinho_fofinho_na_rede.jpg" />
        ).toJSON();
        expect(tree).toMatchSnapshot()
    })
})
