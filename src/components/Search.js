import React, {Component} from 'react'
import {connect} from 'react-redux'

export class Search extends Component {
  state = {
    makeId: '',
    modelId: '',
    selectModels: null,
  }

  getModelOptions = () => {
    const {models} = this.props
    const {makeId} = this.state
    const modelOptions = models.filter(model => model.makeId === +makeId)
    this.setState({selectModels: modelOptions})
  }

  resetModelOptions = () => {
    this.setState({modelId: ''})
  }

  isDisabled = () => {
    const {makeId, modelId} = this.state
    return makeId === '' || modelId === ''
  }

  handleChange = e => {
    const {value, name} = e.target
    const {makeId} = this.state
    let populateOption = false
    if (name === 'makeId') {
      this.resetModelOptions()
      populateOption = value !== +makeId
    }
    this.setState(
      () => ({[name]: value}),
      () => (populateOption ? this.getModelOptions() : null),
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    const {modelId} = this.state
    this.props.history.push(`/make/model/${modelId}`)
  }

  render() {
    const {makeId, modelId, selectModels} = this.state
    const {makes} = this.props
    return (
      <div className="card mb-3">
        <div className="card-header">Search Catalog</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <select
                name="makeId"
                className="form-control form-control-lg"
                value={makeId}
                onChange={this.handleChange}
              >
                <option value="">Select a make</option>
                {makes.map(make => (
                  <option key={make.id} value={make.id}>
                    {make.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <select
                name="modelId"
                className="form-control form-control-lg"
                value={modelId}
                disabled={makeId === ''}
                onChange={this.handleChange}
              >
                <option value="">Select a model</option>
                {selectModels &&
                  selectModels.map(model => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))}
              </select>
            </div>
            <input
              type="submit"
              value="Search"
              className="btn btn-light btn-block btn-lg"
              disabled={this.isDisabled()}
            />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({carCatalogue}) => {
  const {makes, models} = carCatalogue
  return {
    makes,
    models,
  }
}

export default connect(mapStateToProps)(Search)
