import React, { Component } from 'react';
import { Form, Input, Button, Icon, Modal, Select, Radio } from 'antd';


class FilterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      filter: {
        name: "",
        status: "",
        species: "",
        gender: "",
        type: ""  // Don't mutate value.
      }
    }

    this.onConfirm = this.onConfirm.bind(this);
    this.setVisible = this.setVisible.bind(this);
    this.handleSelectOption = this.handleSelectOption.bind(this);
    this.handleFilterParams = this.handleFilterParams.bind(this);
  }

  handleFilterParams(name) {
    return e => {
      e.persist();

      this.setState(state => ({
        ...state,
        filter: {
          ...this.state.filter,
          [name]: e.target.value
        }
      }));
    }
  }

  handleSelectOption(option) {
    this.setState(state => ({
      ...state,
      filter: {
        ...this.state.filter,
        species: option
      }
    }));
  }

  onConfirm() {
    this.props.save(this.state.filter);
    this.setVisible();
  }

  setVisible() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return (
      <div>
        <Form layout="inline" style={{ margin: '15px' }}>
          <Form.Item>
            <Input
              name="name"
              prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="text"
              placeholder="Name"
              onChange={ this.props.handle }
            />
          </Form.Item>
          <Form.Item>
            <Button type="" onClick={ this.setVisible }>
              <Icon type="filter" theme="twoTone" />
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary">
              <Icon type="search"/>
            </Button>
          </Form.Item>
        </Form>
  
        {/* Moadl to diaply filter options */}
        <Modal
          title="Filter Options"
          visible={this.state.visible}
          onOk={ this.onConfirm }
          onCancel={ this.setVisible }
        >
          { JSON.stringify (this.state.filter) }
          <Form>
            <Form.Item label="Name's of Characters">
              <Input
                prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="text"
                placeholder="Name..."
                onChange={ this.handleFilterParams('name') }
              />
            </Form.Item>
            <Form.Item label="Species Characters" hasFeedback>
              <Select placeholder="Select a Species" onSelect={ this.handleSelectOption }>
                <Select.Option value="Human">Human</Select.Option>
                <Select.Option value="Humanoid">Humanoid</Select.Option>
                <Select.Option value="Alien">Alien</Select.Option>
                <Select.Option value="Poopybutthole">Poopybutthole</Select.Option>
                <Select.Option value="Mytholog">Mytholog</Select.Option>
                <Select.Option value="Vampire">Vampire</Select.Option>
                <Select.Option value="Robot">Robot</Select.Option>
                <Select.Option value="Cronenberg">Cronenberg</Select.Option>
                <Select.Option value="Disease">Disease</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Status Characters">
              <Radio.Group>
                <Radio value={'Alive'} onClick={ this.handleFilterParams('status') }>Alive</Radio>
                <Radio value={'Dead'} onClick={ this.handleFilterParams('status') }>Dead</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Gender Characters">
              <Radio.Group onClick={ this.handleFilterParams }>
                <Radio value={'Male'} onClick={ this.handleFilterParams('gender') }>
                  <Icon type="man" />
                  Male
                </Radio>
                <Radio value={'Female'} onClick={ this.handleFilterParams('gender') }>
                  <Icon type="woman" />
                  Female
                </Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default FilterForm;