import React from 'react';
import { Card } from 'react-native-elements/dist/card/Card';

const databaseURL = "https://moayu-e4b4e-default-rtdb.firebaseio.com";

class Words extends React.Component{
    constructor(){
        super();
        this.state = {
             words: {}
        };
    }
    _get() {
        fetch('${databaseURL}/words.json').then(res => {
            if(res.status != 200){
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(words => this.setState({words: words}));
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextState.words != this.state.words;
    }
    componentDidMount(){
        this.get();

    }
    render(){
    
        return(
            <div>
                {Object.keys(this.state.words).map(id => {
                    const word = this.state.words[id];
                }

                )
                
                }
                <Card>
                    <CardContent>
                    Words 페이지
                    </CardContent>
                </Card>
            </div>
        );
    }
}
