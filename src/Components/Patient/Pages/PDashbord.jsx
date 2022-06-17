import React from 'react';

function PDashbord() {
  return (
    <div className="dashboard">
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="bg-white-container">
            <h3 className="primary">Hi, Dr Johne</h3>
            <div className="row">
              <div className="col-lg-4">
                <div className="color-view-1">
                  <div className="image">
                    <img src="./images/tt.svg" alt="svg" />
                  </div>
                  <div className="texts">
                    <p>Latest Test Results</p>
                    <h3>641</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="color-view-2">
                  <div className="image">
                    <img src="./images/tt.svg" alt="svg" />
                  </div>
                  <div className="texts">
                    <p>Total Revenue Earned</p>
                    <h3>641</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="color-view-3">
                  <div className="image">
                    <img src="./images/tt.svg" alt="svg" />
                  </div>
                  <div className="texts">
                    <p>Total Completed Tests</p>
                    <h3>641</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="bg-white-container">
            <div className="notification">
              <h3 className="primary">Don't Forget</h3>
              <p className="red">Clear</p>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="notify-view mt-3">
                  <div className="notification">
                    <div className="image">
                      <img src="./images/notify.svg" alt="svg" />
                    </div>
                    <p className="notify-msg">Test Report Received</p>
                  </div>
                  <div className="time">
                    <p className="primary">14:30 PM</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-3">
                <div className="notify-view">
                  <div className="notification">
                    <div className="image">
                      <img src="./images/notify.svg" alt="svg" />
                    </div>
                    <p className="notify-msg">Test Report Received</p>
                  </div>
                  <div className="time">
                    <p className="primary">14:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PDashbord



