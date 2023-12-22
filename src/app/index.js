import styles from './styles/index.module.css'; 
export default function Home() {
  return (
    <main className="maincontainer">
      <div className={`row m-0 ${styles.backgroundCol}`}>
        <div className='col-md-12'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='left-content'>
                <h2 className='logo-name'>LOGO HERE</h2>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='right-content'>
                <div className='right-side-buttons'>
                  <button className='login-btn'>Log in</button>
                  <button className='signup-btn'>Sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-12'>
          <div className='row  align-items-center'>
            <div className='col-md-6'>
              <div className='left-content'>
                <h3 className='left-side-heading'>Turn your text into videos in minutes</h3>
                <p className='left-side-para'>Lorem ipsum dolor sit amet consectetur. Nullam ullamcorper urna nunc tristique. Mi id nisl nulla montes. Phasellus diam risus fringilla consectetur enim varius. Metus lectus leo dolor.</p>
                <button className='left-side-button'>Get into Videos World</button>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='right-content'>
                  <h3 className='right-side-heading'>AI Product Photos in <span>3 Clicks</span></h3>
                  <p className='right-side-para'>Lorem ipsum dolor sit amet consectetur. Nullam ullamcorper urna nunc tristique. Mi id nisl nulla montes. Phasellus diam risus fringilla consectetur enim varius. Metus lectus leo dolor.</p>
                  <button className='right-side-button'>Get into AI Product World</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
