import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class Counter extends Component {
    state = {
        didViewCountUp: false
    };
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true});
        }
    };
    render() {

        let data = [
            {img: 'funfact-project.png', countNum : 598, countTitle: 'Projects' },
            {img: 'funfact-clients.png', countNum : 128, countTitle: 'Clients' },
            {img: 'funfact-success.png', countNum : 114, countTitle: 'Success' },
            {img: 'funfact-award.png', countNum : 109, countTitle: 'Awards' }
        ];

        let DataList = data.map((val, i)=>{
            return(
                <div className="col-lg-3 col-md-3 col-sm-6" key={i}>
                    <div className="counter-box">
                        <img src={`assets/img/${val.img}`} alt="" />
                        <h1 className="counter-box">
                            <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                <CountUp end={this.state.didViewCountUp ? val.countNum : 0} />
                            </VisibilitySensor>
                        </h1>
                        <h5>{val.countTitle}</h5>

                    </div>
                </div>
            )
        });
        return (
            <div className="counters overview-bgi">
                <div className="container">
                    <div className="row" >

                        {DataList}

                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;