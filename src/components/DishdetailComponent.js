import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    renderDish(dish) {
        if (dish != null)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {this.renderComments(dish.comments)}
                </div>
            )
        else return (
            <div></div>
        )
    }

    renderComments(dishComments) {
        const comments = dishComments.map((comment) => {
            return (
                <li>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {comment.date}</p>
                </li>
            )
        })
        if (comments != null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments}
                    </ul>
                </div>
            )
        else return (
            <div></div>
        )
    }

    render() {
        return (
            this.renderDish(this.props.dish)
        );
    }
}

export default Dishdetail;