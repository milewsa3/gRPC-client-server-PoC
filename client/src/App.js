import { useState } from 'react'
import { SimplePromiseClient, CounterPromiseClient } from './proto/helloworld_grpc_web_pb'
import { HelloRequest, CountRequest } from './proto/helloworld_pb'
import './App.css'

const simpleClient = new SimplePromiseClient("http://localhost:8080", null, null)
const counterClient = new CounterPromiseClient("http://localhost:8080", null, null)

function App() {
  const [simpleResponse, setSimpleResponse] = useState("None")
  const [countResponse, setCountResponse] = useState("None")

  const onSimpleSubmitHandle = (e) => {
    e.preventDefault()
    const name = e.target.elements[0].value
    
    const request = new HelloRequest()
    request.setName(name)
    simpleClient.sayHello(request)
      .then(res => {
        setSimpleResponse(res.getMessage())
      })
      .catch(err => {
        setSimpleResponse('Error: ' + err.message)
      })
  }

  const onCountSubmitHandle = (e) => {
    e.preventDefault()
    const num1 = e.target.elements[0].value
    const num2 = e.target.elements[1].value
    
    const request = new CountRequest()
    request.setNum1(num1)
    request.setNum2(num2)
    counterClient.count(request)
      .then(res => {
        setCountResponse(res.getResult())
      })
      .catch(err => {
        setCountResponse('Error: ' + err.message)
      })
  }

  return (
    <div className="root">
      <div>
        <div className="center-row">
          <span className="center-row h3">Welcome to<a href='https://grpc.io/' target="_blank" rel="noreferrer"><img className="grpc-logo" src="https://grpc.io/img/logos/grpc-icon-color.png" width="200px" height="auto" alt=""/></a>world</span>
        </div>
        <div className='center-col'>
          <span className="h3 bold">Test it out!</span>
          <div className="center-row requests">
            <div className="center-col request">
              <span className="h4">Request</span>
              <form className="form center-col" onSubmit={onSimpleSubmitHandle}>
                <label htmlFor="name">Name:</label><br/>
                <input type="text" id="name" name="name"/><br/>
                <button type='submit' className="submit-btn">Submit</button>
              </form>
              <div className="center-col response">
                <span className="h4">Response</span>
                <span className="h5">{simpleResponse}</span>
              </div>
            </div>
            <div className="center-col request">
              <span className="h4">Request</span>
              <form className="form center-col" onSubmit={onCountSubmitHandle}>
                <label htmlFor="num1">Number 1:</label><br/>
                <input type="text" id="num1" name="num1"/><br/>
                <label htmlFor="num2">Number 2:</label><br/>
                <input type="text" id="num2" name="num2"/><br/>
                <button type='submit' className="submit-btn">Submit</button>
              </form>
              <div className="center-col response">
                <span className="h4">Response</span>
                <span className="h5">{countResponse}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
