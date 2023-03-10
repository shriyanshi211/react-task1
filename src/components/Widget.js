import './Widget.css';

function Widget() {
  return (
    <div className='menu'>
    <h3>Quick Actions</h3>
    <div className = "widget">
    <div className='lefti'>
    <span className='add'>+</span>
    <div className="left">Add Members</div>
    </div>
    <div>
    <span className='add'>+</span>
    <div className="right">Manage Staff</div>
    </div>
    <div>
    <span className='add'>+</span>
    <div className="mid">Set Up Gym Branch</div>
    </div>
    <div>
    <span className='add'>+</span>
    <div className="midi">Manage Subscription</div>
    </div>
    </div>
    </div>
  )
}

export default Widget