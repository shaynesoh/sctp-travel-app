import React from "react";
import Loader from "../components/Loader";
import Header from './../common/header';

const adminLayout = (ChildComponent) => {
    class AdminLayout extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                pageLoaded: false,
                saveLeadClickEvent: ""
            };
        }

        componentDidMount(){
            setTimeout(() => {
                this.setState(() => ({
                    pageLoaded: true
                }))
            }, 1000);
        }

        renderHtml(){
            if(!this.state.pageLoaded){
                return <div className="loading-page">
                    <div className="center">
                        <Loader />
                    </div>
              </div>
            }

            return <div className="d-flex" id="wrapper">
                <div className="main" id="page-content-wrapper">
                    <Header />
                    <div className="container-fluid content-container">
                        <ChildComponent {...this.props} />
                    </div>
                </div>
            </div>
        }

        addLeadModalFooterContent(){ 
            return <>
                <div style={{width:"100%"}}>
                    <button onClick={(e) => this.setState(() => ({saveLeadClickEvent: (Math.random() + 1).toString(36).substring(7)}))} className="btn btn-default low-height-btn">Add Lead</button> 
                </div>
            </>;
        }

        handleParentData = (e) => {
            console.log(e);
        }

        render(){
            return <>
                {this.renderHtml()}
            </>
        }
    }

    return AdminLayout;
}

export default adminLayout;