import React from 'react';
import { Col, Jumbotron, Form, FormGroup, Label, Input } from 'reactstrap';

class RNought extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            New: 0,
            Existing: 0,
            Rnought: 0
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps);
        console.log(prevState);
    }

    handleNewChange(e) {
        this.setState({
            New: e.target.value,
            Rnought: e.target.value / this.state.Existing
        });
    }

    handleExistingChange(e) {
        this.setState({
            Existing: e.target.value,
            Rnought: this.state.New / e.target.value
        });
    }


    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <h1>Calculate R-Nought (R0)</h1>
                </div>
                <div className="col-lg-4 mt-5">
                    <Jumbotron>
                        <Form>
                            <FormGroup row>
                                <Label for="New" sm={4}>New Cases</Label>
                                <Col sm={8}>
                                    <Input
                                        type="number"
                                        name="New"
                                        id="New"
                                        placeholder="New Cases"
                                        value={this.state.New}
                                        onChange={this.handleNewChange.bind(this)}
                                    />
                                </Col>
                                <Col sm={12}>
                                    <p>The number of detected new caases</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="Existing" sm={4}>Existing Cases</Label>
                                <Col sm={8}>
                                    <Input
                                        type="number"
                                        name="Existing"
                                        id="Existing"
                                        placeholder="Existing Cases"
                                        value={this.state.Existing}
                                        onChange={this.handleExistingChange.bind(this)}
                                    />
                                </Col>
                                <Col sm={12}>
                                    <p>The number of existing cases from the previous cycle</p>
                                </Col>
                            </FormGroup>
                            <br />
                            <FormGroup row>
                                <Label for="Rnought" sm={4}>R0</Label>
                                <Col sm={8}>
                                    <Input
                                        type="number"
                                        name="Rnought"
                                        id="Rnought"
                                        placeholder="R Nought"
                                        value={this.state.Rnought}
                                    />
                                </Col>
                                <Col sm={12}>
                                    <p><b>basic reproduction number</b> or basic <b>basic reproductive ratio</b> (pronounced <b>R nought</b> or <b>R zero</b>)</p>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}

export default RNought;