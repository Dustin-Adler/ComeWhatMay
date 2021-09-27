import React from "react";
import { Link } from "react-router-dom";
import "./disaster_plan.css";
import {BsAlarm} from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

class DisasterPlans extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      targetTime: 5,
      disasterType: "",
      modal: "false",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchDisasterPlans();
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  createPlanModal() {
    if (this.state.modal === "false") {
      return null;
    } else {

      return (
        <div className="create-disaster-plan-modal-layout">
          <div className="modal-child">
            <form className="dis-plan-form"
              onSubmit={() =>
                this.props
                .createDisasterPlan(this.props.profileId, {
                  name: this.state.name,
                  targetTime: this.state.targetTime,
                  disasterType: this.state.disasterType,
                })
                .then(() => this.setState({ modal: "false" }))
              }>
              <div className='create-plan-modal-title-close'>
                <div className="plan-header">
                  <h2 className="make-plan">Make a Plan</h2>

                  <p className="exit_edit"
                    onClick={() => this.setState({ modal: "false" })}>
                    <AiOutlineClose id="close-x" /></p>
                </div>
                
              </div>

              <label>
                Plan Name
                <input
                  type="text"
                  placeholder="Name your plan"
                  value={this.state.name}
                  onChange={this.handleChange("name")}
                />
              </label>
              <div className="dis-type">
              <label>
                Disaster Type   
                <select
                  className="dis-select"
                  value={this.state.disasterType}
                  onChange={this.handleChange("disasterType")}
                >
                  <option disabled value="">
                    -Please select-
                  </option>
                  <option value="Tornado">Tornado</option>
                  <option value="Hurricane">Hurricane</option>
                  <option value="Flood">Flood</option>
                  <option value="Fire">Fire</option>
                  <option value="Earthquake">Earthquake</option>
                  <option value="Tsunami">Tsunami</option>
                  <option value="Blizzard">Blizzard</option>
                  <option value="Volcano">Volcano</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              </div>
              <br />
              <label>
                How fast can you do it?
                <h5 className="dis-info">(please select in minutes)</h5>
                <input
                  type="number"
                  min={5}
                  max={60}
                  value={this.state.targetTime}
                  onChange={this.handleChange("targetTime")}
                />
              </label>
              <div className="btn-cont">
                <button id="dis-btn">Submit New Plan</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }

  render() {
    // const plans = this.props.disasterPlans.map((plan, i) => (
    //   <Link to={`/disaster-plan/${plan._id}`}>
    //     <div key={i} className="plan-item">
    //       {plan.name}
    //     </div>
    //   </Link>
    // ));

        const plans = this.props.disasterPlans.map((plan, i) => (
          <div key={i} className="plan-item">
            <Link
              to={{
                pathname: `/disaster/${plan._id}`,
                currentPlan: { plan: plan },
              }}
            > 
            <div className="plan-item-box">
            <BsAlarm className="alarm"/>
              <h4 className="plan-title">Plan #{i +1}: {plan.name}</h4>
            </div>
            </Link>
          </div>
        ));

        return (
            <div>
                <div className="dist-plan-container">
                <button 
                    className="plan-btn"
                    onClick={() => this.setState({ modal: "true"})}>
                    Make a New Plan
                </button>
                    <div className="dist-plans">
                        {plans}
                    </div>
                </div>
                {this.createPlanModal()}
            </div>
        )
    }

}

export default DisasterPlans;
