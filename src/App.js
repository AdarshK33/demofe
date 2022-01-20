import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Row, Col } from 'reactstrap';
import './App.css';

//import Form
import { Form } from './component/Form';
const axios = require('axios');
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     products : [],
    };
  }
  //life cycle
  componentDidMount() {
    this.getMovieApi();
  }
  //Call Axios Get
getMovieApi = async () => {
    try {
      const resp = await axios.get('http://localhost:5000/movie');
      // Set procduts
        this.setState({ products: resp.data.data.movie_result });
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

     render() {
              const columns = [{
                dataField: 'id',
                text: 'Id'
              }, {
                dataField: 'name',
                text: 'Movie Name'
                },
                {
                dataField: 'description',
                text: 'Movie Description'
                },
                  {
                dataField: 'status',
                text: 'Movie Status'
                },
                //    {
                // dataField: 'created_Date',
                // text: 'Create'
                // },
                //     {
                // dataField: 'updated_date',
                // text: 'Update'
                // },
                  
              ];
          //  console.log(this.state.products)
       return (
         <div className="App"> 
             <Row>
                      <Form />
              <Col md="6">
                <div  className="mb-3">
                  <BootstrapTable keyField='id' data={this.state.products} columns={columns} />
                </div>
              </Col>
              </Row>
               </div>
              );
            }
}
