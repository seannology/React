import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: [
                {
                    id: 0,
                    name: 'React Lake Campground',
                    image: 'assets/images/react-lake.jpg',
                    elevation: 1233,
                    description: "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers."
                },
                {
                    id: 1,
                    name: 'Chrome River Campground ',
                    image: 'assets/images/chrome-river.jpg',
                    elevation: 877,
                    description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River."
                },
                {
                    id: 2,
                    name: 'Breadcrumb Trail Campground',
                    image: 'assets/images/breadcrumb-trail.jpg',
                    elevation: 2901,
                    description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground."
                },
                {
                    id: 3,
                    name: 'Redux Woods Campground',
                    image: 'assets/images/redux-woods.jpg',
                    elevation: 42,
                    description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
                }
            ]
        };
    }

    render() {
        const directory = this.state.campsites.map(campsites => {
            return (
                <div Key={campsites.id} className="col">
                    <img src={campsites.image} alt={campsites.name}></img>
                    <h2>{campsites.name}</h2>
                    <p>{campsites.description}</p>
                </div>
            );
        });


        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;