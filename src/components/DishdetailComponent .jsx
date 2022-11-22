import React, { Component } from "react";
import { list } from "reactstrap";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import { unstyle } from "ansi-colors";
class Dishdetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div />;
  }

  renderComments(comments) {
    if (comments != null) {
      const list = comments.map(comment => {
        return (
          <div>
            <ul className="list-unstyled" key="comment.id">
              <li>{comment.comment}</li>
              <li className="list-inline-item">-- {comment.author} , </li>
              <li className="list-inline-item">
                {" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit"
                }).format(new Date(Date.parse(comment.date)))}
              </li>
            </ul>
          </div>
        );
      });

      return (
        <div>
          <h4>Comments</h4>
          <div>{list}</div>
        </div>
      );
    } else return <div />;
  }

  render() {
    if (this.props.selectedDish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <div>{this.renderDish(this.props.selectedDish)}</div>
          </div>
          <div className="col-12 col-md-5 m-1">
            <div> {this.renderComments(this.props.selectedDish.comments)}</div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}
export default Dishdetail;
