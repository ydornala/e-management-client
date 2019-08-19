import { Component } from "react";
import Layout from "./layout";
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default class Company extends Component {
    async getCompanies() {
        const res = await fetch('https://e-management-server.herokuapp.com/api/company', {method: 'GET'});
        const companies = await res.json();

        this.setState({companies: companies});
    }
    
    constructor(props) {
        super(props);

        this.state = {companies: []};

        console.log('pop', this.props);
        const router = useRouter()
        const { id } = router.query;
        console.log('ID', id);
        this.getCompanies();
    }

    render() {
        return (
            <Layout>
            <div className="row">
            {
              this.state.companies.length > 0 ?  
                this.state.companies.map((c, key) => {
                  return (<div className="col-md-3" key={key}>
                            <Link href="/company/[c._id]" as={`/company/${c._id}`}>
                            <div className="card">
                              <div className="card-body">
                                <img src={c.logo ? c.logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXRxDt2wKe7gj8qLv6KkVOusXRbOvbLuN4SDixJn5AjWq4Ia4AQ'} alt={c.name} />
                                <h5 className="card-title">{c.name}</h5>
                              </div>
                            </div>
                            </Link>
                          </div>)
                }) : (<div>Fetching</div>)              
            }
        <style jsx>
          {
            `
            .card-body img{
              width: 10%;
              display: block;
              float: left;
              margin-right: 9px;
            }
            `
          }
        </style>

          </div>
          </Layout>
        )
    }
}