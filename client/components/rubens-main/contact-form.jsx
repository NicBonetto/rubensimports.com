import React, { Component } from 'react'

class Form extends Component {
  handleSubmit(e) {
    e.preventDefault()
    
    const data = new FormData(e.target)
    
    fetch('/email/contact', {
      method: 'POST',
      body: data
    })
  }

  render() {
    return (
      <div className="inline-sections">
        <div className="col-sm-6">
            <div>
                <header className="contact-titles">
                <div className="title-spacing"></div>
                <h3>Contact Us Now</h3>
                <div className="title-spacing"></div>
                </header>
            </div>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input name="first" className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input name="last" className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input name="phone" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea type="text" name="message" className="form-control" rows="5"></textarea>
                    </div>
                    <div>
                      <button className="btn btn-default btn-color" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
  }
}

export default Form