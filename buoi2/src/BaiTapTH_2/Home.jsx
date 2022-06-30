import React, { Component } from "react";
import data from "./dataGlasses.json";
import Descript from "./Descript";
import Glasses from "./Glasses";
import Model from "./Model";

export default class Home extends Component {
  renderModel = () => {
    return <Model changeGlasses={this.state.glass} />;
  };

  renderDescript = () => {
    return <Descript descGlass={this.descriptGlasses} />;
  };

  renderListGlasses = () => {
    return data.map((ele) => {
      return (
        <div className="col-3" key={ele.id}>
          <Glasses descGlass={this.descriptGlasses} item={ele} />
        </div>
      );
    });
  };

  state = {
    selectGlasses: data[0],
    glass: data[0].url,
  };

  descriptGlasses = (glass) => {
    this.setState({
      selectGlasses: glass,
    });
  };

  changeGlasses = (url) => {
    this.setState({
      glass: url,
    });
  };

  render() {
    const { name, price, desc } = this.state.selectGlasses;
    return (
      <div className="container">
        <div className="row p-5">
          <div className="col-6">{this.renderModel()}</div>
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Tên</th>
                      <th>Giá</th>
                      <th>Mô tả</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{name}</td>
                      <td>{price}$</td>
                      <td>{desc}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row">{this.renderListGlasses()}</div>
      </div>
    );
  }
}
