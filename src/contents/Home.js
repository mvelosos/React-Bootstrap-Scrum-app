import React, { Component } from 'react';
import Cards from '../ui/Cards';
import Jumbo from '../ui/Jumbo'
import {hashHistory} from 'react-router';

export default class Home extends Component {

    homeCardReleases = {
        title: 'Releases',
        text: 'Manage Releases',
        img: 'https://bevouliin.com/wp-content/uploads/2014/02/rocket-booster-logo-template-bevouliin-preview.png',
        action: () => hashHistory.push('/releases')
    }
    homeCardBacklog = {
        title: 'Backlog',
        text: 'Manage Backlog',
        img: 'http://assets.okfn.org/p/data/img/icon-512.png',
        action: () => hashHistory.push('/backlog')
    }
    homeCardSprints = {
        title: 'Sprints',
        text: 'Manage Sprints',
        img: 'https://www.hitechies.be/blog/wp-content/uploads/2017/11/scrum-a5c44d8364.png',
        action: () => hashHistory.push('/sprints')
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                  <Cards title={this.homeCardReleases.title}
                      text={this.homeCardReleases.text}
                      action={this.homeCardReleases.action}
                      img={this.homeCardReleases.img}/>
                  <Cards {...this.homeCardBacklog} />
                  <Cards {...this.homeCardSprints} />
                </div>
                <div className="row">
                  <Jumbo />
                </div>
            </div>
        );
    }
}
