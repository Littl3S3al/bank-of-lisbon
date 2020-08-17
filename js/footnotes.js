const notes = [
    `Langa, M. 2018, ‘Moshekwa Langa’. Cité International des Arts, viewed 023 January 2020, < https://www.citedesartsparis.net/ en/moshekwa-langa>.`,
    `As summarised in the abstract, the following text is primarily based on open source research of online news, articles, videos, images and interviews I have followed in trying to understand what happened. It is neither impartial nor comprehensive, but a selective re-mediation of existing information. The attempts to reach city officials, employees and firemen, or locate building plans have mainly led to dead ends. `,
    `Description of blast plan and preparation by Joe Brinkmann, director of Jet Demolition, which was contracted to demolish the Bank of Lisbon by the Gauteng Department of Infrastructure Development. ‘106-m high Bank of Lisbon implosion is one of the most complex projects ever undertaken by Jet Demolition’ 2019, Mining News, 01 December, viewed 20 December 2019, 
    <https://www.miningsafety.co.za/newscontent/10220/108-m-high-bank-of-lisbon-implosion-is-one-of-the-most-complex-projects-ever-undertaken-by-jet-demolition>.
    `
]

const title = document.querySelector('#footnoteTitle');
const note = document.querySelector('.footnote-content');


document.body.addEventListener('click', (e) => {
    if(e.target.tagName === "SUP"){
        let currNote = parseInt(e.target.innerText) - 1;
        openNote(currNote);
    }
})


// FUNCTION TO SHOW MODAL
const openNote = (currNote) => {
    title.innerText = `Footnote #` + (currNote + 1);
    note.innerText = notes[currNote];
    $('#footnoteModal').modal('show');
}
