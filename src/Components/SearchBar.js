import React from 'react';
import { Form, Button } from 'react-bootstrap';

class SearchBar extends React.Component {

  state = { term: '' }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <Form className="d-flex my-3" style={{ width: '40%', margin: '0 auto' }} onSubmit={this.onFormSubmit}>
        <Form.Control id="search" type="text" placeholder="Search for a video..." onChange={e => this.setState({ term: e.target.value })} value={this.state.term}/>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
      )
  }
}

export default SearchBar;
