import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Istore() {
  return (
    <div>

      <div><Navbar /></div>

      <div className="mysearch" style={{ marginLeft: '1000px' }}>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success text-white bg-dark" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card" style={{ width: '100%' }}>
              <img src="https://cdn.pixabay.com/photo/2019/08/07/07/05/woman-4390055_1280.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>

                <div className='thiscontainer w-100 '>

                  <select className='m-2 h-100 bg-primary rounded'>
                    {Array.from(Array(6), (x, i) => {
                      return (
                        <option key={i + 1} value={i + 1}> {i + 1} </option>
                      )
                    })}
                  </select>


                  <select className='m-2 h-100 bg-primary rounded '>
                    <option value="ReadyMade">ReadyMade</option>
                    <option value="Cloth">Cloth</option>
                  </select>

                  <p className='mx-1 fs-5' >Total Price</p>
                </div>

              

                <Link to="#" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card" style={{ width: '100%' }}>
              <img src="https://cdn.pixabay.com/photo/2019/08/07/07/05/woman-4390055_1280.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>

                <div className='thiscontainer w-100'>

                  <select className='m-2 h-100 bg-primary rounded'>
                    {Array.from(Array(6), (x, i) => {
                      return (
                        <option key={i + 1} value={i + 1}> {i + 1} </option>
                      )
                    })}
                  </select>


                  <select className='m-2 h-100 bg-primary rounded'>
                    <option value="ReadyMade">ReadyMade</option>
                    <option value="Cloth">Cloth</option>
                  </select>
                </div>


                <Link to="#" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card" style={{ width: '100%' }}>
              <img src="https://cdn.pixabay.com/photo/2019/08/07/07/05/woman-4390055_1280.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>

                <div className='thiscontainer w-100'>

                  <select className='m-2 h-100 bg-primary rounded'>
                    {Array.from(Array(6), (x, i) => {
                      return (
                        <option key={i + 1} value={i + 1}> {i + 1} </option>
                      )
                    })}
                  </select>


                  <select className='m-2 h-100 bg-primary rounded'>
                    <option value="ReadyMade">ReadyMade</option>
                    <option value="Cloth">Cloth</option>
                  </select>
                </div>


                <Link to="#" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card" style={{ width: '100%' }}>
              <img src="https://cdn.pixabay.com/photo/2019/08/07/07/05/woman-4390055_1280.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>

                <div className='thiscontainer w-100'>

                    <select className='m-2 h-100 bg-primary rounded'>
                        {Array.from(Array(6), (x,i)=>{
                            return(
                              <option key={i+1} value={i+1}> {i+1} </option>
                            )
                        })}
                    </select>


                    <select className='m-2 h-100 bg-primary rounded'>
                      <option value="ReadyMade">ReadyMade</option>
                      <option value="Cloth">Cloth</option>
                    </select>
                 </div>

                <Link to="#" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card" style={{ width: '100%' }}>
              <img src="https://cdn.pixabay.com/photo/2019/08/07/07/05/woman-4390055_1280.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>

                <div className='thiscontainer w-100'>

                    <select className='m-2 h-100 bg-primary rounded'>
                        {Array.from(Array(6), (x,i)=>{
                            return(
                              <option key={i+1} value={i+1}> {i+1} </option>
                            )
                        })}
                    </select>


                    <select className='m-2 h-100 bg-primary rounded'>
                      <option value="ReadyMade">ReadyMade</option>
                      <option value="Cloth">Cloth</option>
                    </select>
                 </div>

                <Link to="#" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card" style={{ width: '100%' }}>
              <img src="https://cdn.pixabay.com/photo/2019/08/07/07/05/woman-4390055_1280.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>

                <div className='thiscontainer w-100'>

                    <select className='m-2 h-100 bg-primary rounded'>
                        {Array.from(Array(6), (x,i)=>{
                            return(
                              <option key={i+1} value={i+1}> {i+1} </option>
                            )
                        })}
                    </select>


                    <select className='m-2 h-100 bg-primary rounded'>
                      <option value="ReadyMade">ReadyMade</option>
                      <option value="Cloth">Cloth</option>
                    </select>
                 </div>

                <Link to="#" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card" style={{ width: '100%' }}>
              <img src="https://cdn.pixabay.com/photo/2019/08/07/07/05/woman-4390055_1280.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>

                <div className='thiscontainer w-100'>

                    <select className='m-2 h-100 bg-primary rounded'>
                        {Array.from(Array(6), (x,i)=>{
                            return(
                              <option key={i+1} value={i+1}> {i+1} </option>
                            )
                        })}
                    </select>


                    <select className='m-2 h-100 bg-primary rounded'>
                      <option value="ReadyMade">ReadyMade</option>
                      <option value="Cloth">Cloth</option>
                    </select>
                 </div>

                <Link to="#" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card" style={{ width: '100%' }}>
              <img src="https://cdn.pixabay.com/photo/2019/08/07/07/05/woman-4390055_1280.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>

                <div className='thiscontainer w-100'>

                    <select className='m-2 h-100 bg-primary rounded'>
                        {Array.from(Array(6), (x,i)=>{
                            return(
                              <option key={i+1} value={i+1}> {i+1} </option>
                            )
                        })}
                    </select>


                    <select className='m-2 h-100 bg-primary rounded'>
                      <option value="ReadyMade">ReadyMade</option>
                      <option value="Cloth">Cloth</option>
                    </select>
                 </div>

                <Link to="#" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>


        </div>


      </div>
    </div>
  );
}


