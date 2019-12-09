import React from 'react'
import './Tabela.css'

function searchingFor(term) {
  return function (x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class Tabela extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      term: ''
    }
    this.searchHandler = this.searchHandler.bind(this)
  }

  searchHandler(event) {
    this.setState({ term: event.target.value })
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/item")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { term, items } = this.state;
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <form>
            <h4>Pesquisar servidor</h4>
            <input className="searchBar" type="text" onChange={this.searchHandler} value={term} placeholder="GNCAS..."/>
          </form>
          <div className="items-container">
            {items.filter(searchingFor(term)).map(item => (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" key={item._id}>Ativo - {item.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Sistema - {item.system}</h6>
                  <p className="card-subtitle mb-2 text-muted"><small>ID - {item._id}</small></p>
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }
  }
}

export default Tabela;