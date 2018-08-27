
import React, {PropTypes, Component} from 'react';
import { Button } from 'reactstrap';

type State = {};

type Props = {
     name: string,
     click: Function,
     id: string,
     email: string,
};

class TotalListGroup extends Component<Props> {
     render() {
          return (
               <Button color="primary" onClick={() => this.props.click(this.props.id, this.props.email)} style={{width: '400px'}}>
                    {this.props.name} - {this.props.id}
               </Button>
          );
     }

}

export default TotalListGroup;
