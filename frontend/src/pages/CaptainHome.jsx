import React from 'react';

const CaptainHome = () => {
    return (
        <div className="captain-home">
            <h1>Welcome Captain</h1>
            <div className="captain-dashboard">
                {/* Add your captain dashboard content here */}
                <div className="stats-container">
                    <div className="stat-box">
                        <h3>Today's Rides</h3>
                        <p>0</p>
                    </div>
                    <div className="stat-box">
                        <h3>Total Earnings</h3>
                        <p>$0.00</p>
                    </div>
                </div>
                <div className="action-buttons">
                    <button className="primary-btn">Go Online</button>
                    <button className="secondary-btn">View History</button>
                </div>
            </div>
        </div>
    );
};

export default CaptainHome;