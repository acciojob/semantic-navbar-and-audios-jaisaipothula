describe('Audio Section Tests', () => {
    it('checks the presence and attributes of audio elements', () => {
        // Ensure that the heading text is present
        cy.contains('h2', '3 random audios');

        // Select all audio elements and verify there are exactly 3
        cy.get('audio').should('have.length', 3);

        // Verify each audio element has the controls attribute
        cy.get('audio').each(($audio) => {
            cy.wrap($audio).should('have.attr', 'controls');
        });

        // Collect all source URLs and compare them with expected URLs
        cy.get('audio').then(($audios) => {
            const srcs = $audios.map((i, el) => Cypress.$(el).find('source').attr('src')).get();
            expect(srcs).to.deep.eq([
                'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
                'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
                'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3'
            ]);
        });
    });
});
