import React, { Component } from 'react';

import Form from '../ui/Form';

export default class Releases extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            releases: [
                {
                    id: 1,
                    releaseName: 'First Release - 01',
                    releaseDate: '23/05/2017'
                },
                {
                    id: 2,
                    releaseName: 'Second Release - 02',
                    releaseDate: '12/02/2018'
                },
                {
                    id: 3,
                    releaseName: 'Third Release - 03',
                    releaseDate: '06/04/2018'
                },
                {
                    id: 4,
                    releaseName: 'Fourth Release - 04',
                    releaseDate: '03/07/2019'
                }
            ]
        }
    }

    handleSubmit(e, {name, date}) {
        e.preventDefault();
        var state = this.state;
        var myRelease = {
            id: state.releases.length + 1,
            releaseName: name,
            releaseDate: date
        }
        this.setState({releases: state.releases.concat(myRelease)});
    }

    handleRemove(id){
        console.log('Implement remove function here!');
        var myReleases = this.state.releases;
        myReleases.splice(id, 1)
        this.setState({releases: myReleases});
    }


    render() {
        return (
            <div className="container" style={{ paddingTop: '25px' }}>
                <Form submitHandler={this.handleSubmit} />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Release Name</th>
                            <th>Release Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.releases.map((release, index) => {
                            const onClickRemove = (e) => {
                                this.handleRemove(index);
                            }
                            return (
                                <tr key={release.id}>
                                    <th scope="row">{release.id}</th>
                                    <td>{release.releaseName}</td>
                                    <td>{release.releaseDate}</td>
                                    <td><button type="button" className="btn btn-danger btn-sm" onClick={onClickRemove}>Remove</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        );
    }
}
