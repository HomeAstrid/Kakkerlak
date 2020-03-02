import React from 'react';



export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.book = this.book.bind(this);
    }

    //keuze boek opslaan in state en weergeven
    book(book) {
        this.setState({book: book});
    }

    state = {book:undefined};

    render() {
        return (
            <div>
                {this.state.book === undefined && <p>Kies een boek</p>}
                {this.state.page !== undefined && <p>boek gekozen</p>}
            </div>
        );
    }


}