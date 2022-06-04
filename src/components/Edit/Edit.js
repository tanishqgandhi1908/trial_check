import React, { Component } from "react";    
import './Edit.css'    
    
class Edit extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            orgName: '',    
            enrollprog: 'Select Your Enrolled Program',    
            // repName: '',    
            // repDesig: '',    
            // regId: '',    
            month: '',    
            amount: '',    
            b18: '',    
            b60: '',    
            bfe: '',    
            tbe: '',    
            location: '',    
            partner: '',  
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { orgName ,enrollprog ,repName ,repDesig ,regId ,month ,amount ,b18 ,b60 ,bfe ,tbe ,location ,partner} = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
         
        if (!orgName) {    
            formIsValid = false;    
            formErrors["orgNameErr"] = "Organisation Name is required.";    
        }    
       
        if (enrollprog === '' || enrollprog === "select") {    
            formIsValid = false;    
            formErrors["enrollprogErr"] = "Select Program Name.";    
        } 
     
        // if (!repName) {    
        //     formIsValid = false;    
        //     formErrors["repNameErr"] = "Representator Name is required.";    
        // }    
        
        // if (!repDesig) {    
        //     formIsValid = false;    
        //     formErrors["repDesigErr"] = "Representer Designation is required";    
        // }    
       
        // if (!regId) {    
        //     formIsValid = false;    
        //     formErrors["regIdErr"] = "Registered Id is required.";    
        // }

        if (!month) {    
            formIsValid = false;    
            formErrors["monthErr"] = "Month is required.";    
        }

        if (!amount) {    
            formIsValid = false;    
            formErrors["amountErr"] = "Amount is required.";    
        }

        if (!b18) {    
            formIsValid = false;    
            formErrors["b18Err"] = "Number of beneficiaries is required.";    
        }

        if (!b60) {    
            formIsValid = false;    
            formErrors["b60Err"] = "Number of beneficiaries is required.";    
        }

        if (!bfe) {    
            formIsValid = false;    
            formErrors["bfeErr"] = "Number of beneficiaries is required.";    
        }

        if (!tbe) {    
            formIsValid = false;    
            formErrors["tbeErr"] = "Total Number of beneficiaries is required.";    
        }

        // if (!location) {    
        //     formIsValid = false;    
        //     formErrors["locationErr"] = "Location is required.";    
        // }
       
        // if (!partner) {    
        //     formIsValid = false;    
        //     formErrors["partnerErr"] = "Charity Partner is required.";    
        // }
       
        
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('You have been successfully entered the detail.')    
            this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const { orgNameErr ,enrollprogErr ,repNameErr ,repDesigErr ,regIdErr ,monthErr ,amountErr ,b18Err ,b60Err ,bfeErr ,tbeErr ,locationErr ,partnerErr } = this.state.formErrors;    
    
        return (    
            <div className="formDiv">    
                <h1 style={{ textAlign: "center" }} >NGO</ h1>    
                <div>    
                    <form class="m1" onSubmit={this.handleSubmit}>    
                        <div>    
                            <label htmlFor="orgName">Organisation Name</label><br></br>    
                            <input type="text" name="orgName"    
                                value={this.state.orgName}    
                                onChange={this.handleChange}    
                                placeholder="Your Organisation name.."    
                                className={orgNameErr ? ' showError' : ''} />    
                            {orgNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{orgNameErr}</div>    
                            }    
                        </div>

                        <div>    
                            <label htmlFor="enrollprog">Enrolled Program</label>    
                            <select name="enrollprog" onChange={this.handleChange}    
                                className={enrollprogErr ? ' showError' : ''}    
                                value={this.state.enrollprog} >    
                                <option value="select">--Select--</option>    
                                <option value="feeding">NGO Feeding Program</option>    
                                <option value="rescue">Food Rescue Program</option>    
                                <option value="relief">Food Relief Program</option>    
                                <option value="bfeeding">Breakfast Feeding Program</option>    
                            </select>    
                            {enrollprogErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{enrollprogErr}</div>    
                            }    
                        </div>    

                        {/* <div>    
                            <label htmlFor="repName">Representator Name</label><br></br>     
                            <input type="text" name="repName"    
                                value={this.state.repName}    
                                onChange={this.handleChange}    
                                placeholder="Your Representator Name.."    
                                className={repNameErr ? ' showError' : ''} />    
                            {repNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{repNameErr}</div>    
                            }    
                        </div>     */}
                        
                        {/* <div>    
                            <label htmlFor="repDesig">Representator Designation</label><br></br>     
                            <input type="text" name="repDesig"    
                                value={this.state.repDesig}    
                                onChange={this.handleChange}    
                                placeholder="Your Representator Designation.."    
                                className={repDesigErr ? ' showError' : ''} />    
                            {repDesigErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{repDesigErr}</div>    
                            }    
                        </div>     */}

                        {/* <div>    
                            <label htmlFor="regId">Registered Id</label><br></br>    
                            <input type="text" name="regId"    
                                onChange={this.handleChange}    
                                value={this.state.regId}    
                                placeholder="Your Registered Id.."    
                                className={regIdErr ? ' showError' : ''} />    
                            {regIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{regIdErr}</div>    
                            }    
                        </div>   */}

                        <div>    
                            <label htmlFor="month">Support provided in Month</label><br></br>    
                            <input type="text" name="month"    
                                onChange={this.handleChange}    
                                value={this.state.month}    
                                placeholder="Support provided in Month.."    
                                className={monthErr ? ' showError' : ''} />    
                            {monthErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{monthErr}</div>    
                            }    
                        </div>  

                        <div>    
                            <label htmlFor="amount">Amount of food Recieved in Kgs</label><br></br>    
                            <input type="text" name="amount"    
                                onChange={this.handleChange}    
                                value={this.state.amount}    
                                placeholder="Amount of food Recieved in Kgs.."    
                                className={amountErr ? ' showError' : ''} />    
                            {amountErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{amountErr}</div>    
                            }    
                        </div>  

                        <div>    
                            <label htmlFor="b18">Number of beneficiaries under 18</label><br></br>     
                            <input type="text" name="b18"    
                                onChange={this.handleChange}    
                                value={this.state.b18}    
                                placeholder="Number of beneficiaries under 18.."    
                                className={b18Err ? ' showError' : ''} />    
                            {b18Err &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{b18Err}</div>    
                            }    
                        </div>  

                        <div>    
                            <label htmlFor="b60">Number of beneficiaries over 60</label><br></br>    
                            <input type="text" name="b60"    
                                onChange={this.handleChange}    
                                value={this.state.b60}    
                                placeholder="Number of beneficiaries over 60.."    
                                className={b60Err ? ' showError' : ''} />    
                            {b60Err &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{b60Err}</div>    
                            }    
                        </div>  

                        <div>    
                            <label htmlFor="bfe">Number of female beneficiaries</label><br></br>     
                            <input type="text" name="bfe"    
                                onChange={this.handleChange}    
                                value={this.state.bfe}    
                                placeholder="Number of female beneficiaries.."    
                                className={bfeErr ? ' showError' : ''} />    
                            {bfeErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{bfeErr}</div>    
                            }    
                        </div>  

                        <div>    
                            <label htmlFor="tbe">Total number of beneficiaries reached</label><br></br>     
                            <input type="text" name="tbe"    
                                onChange={this.handleChange}    
                                value={this.state.tbe}    
                                placeholder="Total number of beneficiaries reached.."    
                                className={tbeErr ? ' showError' : ''} />    
                            {tbeErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{tbeErr}</div>    
                            }    
                        </div>  

                        {/* <div>    
                            <label htmlFor="location">Location covered</label><br></br>     
                            <input type="text" name="location"    
                                onChange={this.handleChange}    
                                value={this.state.location}    
                                placeholder="Location covered.."   
                                className={locationErr ? ' showError' : ''} />    
                            {locationErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{locationErr}</div>    
                            }    
                        </div>   */}

                        {/* <div>    
                            <label htmlFor="partner">Charity Partner</label><br></br>     
                            <input type="text" name="partner"    
                                onChange={this.handleChange}    
                                value={this.state.partner}    
                                placeholder="Your Charity Partner.."    
                                className={partnerErr ? ' showError' : ''} />    
                            {partnerErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{partnerErr}</div>    
                            }    
                        </div>   */}
                           
                        <input type="submit" value="Submit" />    
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default Edit;