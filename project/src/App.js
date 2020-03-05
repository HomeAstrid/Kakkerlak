import React from 'react';
import {Document, Page} from 'react-pdf/dist/entry.webpack';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.book = this.book.bind(this);
    }

    //keuze boek opslaan in state en weergeven
    book(book) {
        this.setState({book: book});
    }

    onDocumentLoadSuccess = ({numPages}) => {
        this.setState({numPages});
    }

    state = {
        book: undefined, books: [], numPages: null,
        pageNumber: 1,
    };

    componentDidMount() {
        fetch("./scan_dir.php", {
            method: 'GET',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrer: 'no-referrer'
        }).then((response) => response.json()).then((json) => this.setState({books: json}))
    }

    render() {

        return (
            <div>
                <h2>Online versie kakkerlakske</h2>
                {this.state.book === undefined && <div>
                    <p>Kies een kakkerlakse</p>
                    <div>
                        {this.state.books.map((e) => <div><a onClick={() => this.book(e.url)}>{e.file}</a><br/></div>)}
                    </div>
                </div>
                }
                {this.state.book !== undefined && <div>
                    <center>
                        <Document
                            file={this.state.book}
                            onLoadSuccess={this.onDocumentLoadSuccess}
                        >
                            <Page pageNumber={this.state.pageNumber}/>
                        </Document>
                    </center>
                    <p>Pagina {this.state.pageNumber} van {this.state.numPages}</p>
                    <a
                        onClick={() => this.setState({pageNumber: this.state.pageNumber === 1 ? 1 : this.state.pageNumber - 1})}>Vorige
                        pagina
                    </a>
                    <a
                        onClick={() => this.setState({pageNumber: this.state.pageNumber === this.state.numPages ? this.state.pageNumber : this.state.pageNumber + 1})}>Volgende
                        pagina
                    </a>
                </div>}
            </div>
        );
    }


}
