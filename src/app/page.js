import React from 'react';
import Tools from './component/tools';
import Team from './component/team';
import Video from './component/video';
import styles from './styles/index.module.css'; 
import Image from 'next/image'
import Link from 'next/link';
import Testimonial from './component/testimonial';
const importAll = (r) => r.keys().map(r);
const clientImages = importAll(require.context('./../../public/images/clients', false, /\.(png|jpe?g|svg)$/));
const videoImages = importAll(require.context('./../../public/images/video', false, /\.(png|jpe?g|svg)$/));
const languageImages = importAll(require.context('./../../public/images/language', false, /\.(png|jpe?g|svg)$/));
const toolsImages = importAll(require.context('./../../public/images/tools', false, /\.(png|jpe?g|svg)$/));
const imagesInFirstRow = languageImages.slice(0, 6);
const imagesInSecondRow = languageImages.slice(6, 11);
const imagesInThirdRow = languageImages.slice(11, 15);

export default function Home() {
  return (
    <main>
      <div className={`${styles.backgroundCol2}`}>
        <div className="row m-0 section-bg">
          <div className='col-md-12'>
            <div className='row align-items-center'>
              <div className='col-md-3'>
                <div className='left-content'>
                  <h2 className='logo-name'>LOGO HERE</h2>
                </div>
              </div>
              <div className='col-md-9'>
                <div className='right-content'>
                  <div className='navbar'>
                    <ul className='navbar-list'>
                      <li>
                        <Link href="/">Features
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          Use Cases
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          Resources
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          Company
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='right-side-buttons'>
                    <button className='login-btn'>Log in</button>
                    <button className='signup-btn'>Sign up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-6 offset-xl-3 col-lg-6 offset-lg-3'>
            <div className='banner-content'>
              <h3 className='banner-side-heading'>Turn your text into videos in <span>minutes</span></h3>
              <p className='banner-side-para'>Lorem ipsum dolor sit amet consectetur. Cursus commodo vitae bibendum in.</p>
              <div className='banner-buttons'>
                <button className='banner-side1-button'>Create Free AI Video</button>
                <button className='banner-side2-button'>Get a Demo</button>
              </div>
            </div>
          </div>
          <div className='col-xl-8 offset-xl-2 col-lg-8 offset-lg-2'>
            <div className='banner-tags'>
                <p><span><Image src={`/svg/check.svg`} width={20} height={20}/></span>120+ languages</p>
                <p><span><Image src={`/svg/check.svg`} width={20} height={20}/></span>140+ AI Avatars</p>
                <p><span><Image src={`/svg/check.svg`} width={20} height={20}/></span>Edit as simply as a slide-deck</p>
            </div>
            <div className='banner-image'>
              <Image src={`/images/banner2.png`} layout='responsive' width={500} height={500}/>
            </div>
          </div>
        </div>
      </div>
      <div className='client-section'>
        <div className="row m-0">
          <div className='col-md-12'>
            <h3 className='client-heading'>Trusted by the world's fastest-growing companies</h3>
          </div>
          <div className='col-xl-8 offset-lg-2 col-lg-10 offset-lg-1'>
            <div className='client-logos'>
              {clientImages.map((image, index) => (
                <div className='client-image' key={index}><Image src={image.default} /></div>
              ))}
            </div>
          </div>                                                
        </div>
      </div>
      <div className='team-section'>
        <div className="row m-0">
          <div className='col-xl-4 offset-xl-4 col-lg-6 offset-lg-3'>
            <h4 className='team-sub-heading'>Use Cases</h4>
            <h3 className='team-main-heading'>For teams who create training videos at scale</h3>
          </div>
          <div className='col-xl-8 offset-xl-2 col-lg-10 offset-lg-1'>
            <div className='team-content'>
              <div className="row align-items-center">
                <div className='col-md-6'>
                  <div className='team-inner-content'>
                    <Image src={`/images/team/team-sm-1.png`} width={72} height={72} />
                    <h3 className='team-heading'>Learning & Development</h3>
                    <h6 className='team-subheading'>Replace boring text, PowerPoints and PDFs with engaging videos your team will love</h6>
                    <p className='team-para'>"Usually, our colleagues don't jump in the air when they hear e-learning, but the AI videos created with Company Name have sparked motivation that we haven't seen before."</p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='team-inner-image'>
                    <Image src={`/images/team/team1.png`}  width={500} height={500}/>
                  </div>
                </div>
              </div>
            </div>
            <div className='team-content2'>
              <div className='row'>
                <Team/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='work-section'>
        <div className="row m-0">
          <div className='col-xl-8 offset-lg-2 col-lg-10 offset-lg-1'>
            <h4 className='work-sub-heading'>From Idea to video in minutes</h4>
            <h3 className='work-main-heading'>See how AI video generator works below</h3>
          </div>
          <div className='col-xl-8 offset-lg-2 col-lg-10 offset-lg-1'>
            <Video/>
          </div>
        </div>
      </div>
      <div className='roi-section'>
        <div className="row m-0">
          <div className='col-xl-8 offset-xl-2 col-lg-10 offset-lg-1'>
            <h4 className='roi-sub-heading'>The ROI for your business</h4>
            <h3 className='roi-main-heading'>You don't have to choose between cost,time and quality</h3>
          </div>
          <div className='col-xl-8 offset-xl-2 col-lg-10 offset-lg-1'>
            <div className='roi-content'>
              <div className="row align-items-center">
                <div className='col-md-12'>
                  <div className='roi-inner-content'>
                    <Image src={`/images/roi/roi1.png`} width={120} height={28} />
                    <hr/>
                    <h6 className='roi-subheading'>Cost Savings</h6>
                    <h3 className='roi-heading'>+50%</h3>
                    <p className='roi-para'>Lorem ipsum dolor sit amet consectetur. Massa proin elit id cras urna dictum tincidunt sapien cursus. Augue at enim scelerisque in dui sapien bibendum. Faucibus ridiculus nunc at amet semper id aliquam. Velit ultrices diam a hendrerit leo urna. Tristique quam in sed facilisis. Porttitor duis praesent velit quis. Lacus blandit nulla commodo sit massa sit donec. Egestas id turpis sodales at duis odio nulla sit.Ornare eget morbi nisl eget ut diam nulla. Adipiscing commodo faucibus nunc ut. Adipiscing facilisis orci sed sit fermentum leo. Id tellus phasellus imperdiet viverra fringilla amet tristique aliquam. Odio id mi ultrices orci neque diam varius. Diam id turpis elit ultricies blandit lacus massa tortor tristique. Pretium laoreet in et blandit.</p>
                    <button className='roi-btn'>Read case study</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='roi-content2'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='roi-inner-content'>
                    <Image src={`/images/roi/roi2.png`} width={120} height={28} />
                    <hr/>
                    <h6 className='roi-subheading'>Time Savings</h6>
                    <h3 className='roi-heading'>+50%</h3>
                    <p className='roi-para'>Lorem ipsum dolor sit amet consectetur. Massa proin elit id cras urna dictum tincidunt sapien cursus. Augue at enim scelerisque in dui sapien bibendum. Faucibus ridiculus nunc at amet semper id aliquam. Velit ultrices diam a hendrerit leo urna. Tristique quam in sed facilisis. Porttitor duis praesent velit quis.</p>
                    <button className='roi-btn'>Read case study</button>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='roi-inner-content'>
                    <Image src={`/images/roi/roi3.png`} width={120} height={28} />
                    <hr/>
                    <h6 className='roi-subheading'>Engagement increase</h6>
                    <h3 className='roi-heading'>+30%</h3>
                    <p className='roi-para'>Lorem ipsum dolor sit amet consectetur. Massa proin elit id cras urna dictum tincidunt sapien cursus. Augue at enim scelerisque in dui sapien bibendum. Faucibus ridiculus nunc at amet semper id aliquam. Velit ultrices diam a hendrerit leo urna. Tristique quam in sed facilisis. Porttitor duis praesent velit quis.</p>
                    <button className='roi-btn'>Read case study</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='video-section'>
        <div className="row m-0">
          <div className='col-xl-8 offset-lg-2 col-lg-10 offset-lg-1'>
            <div className='row align-items-center'>
              <div className='col-md-8'>
                <h4 className='video-sub-heading'>AI AVATARS</h4>
                <h3 className='video-main-heading'>Create videos as diverse as your audience</h3>
              </div>
              <div className='col-md-4 text-right'>
                 <button className='video-btn'>See all avatars</button>
              </div>
            </div>
          </div>
          <div className='col-xl-8 offset-xl-2 col-lg-8 offset-lg-2'>
            <div className='video-tags'>
                <p><span><Image src={`/svg/check.svg`} width={20} height={20}/></span>Engage your viewers with <b>over 140 AI Avatars</b></p>
                <p><span><Image src={`/svg/check.svg`} width={20} height={20}/></span><b>Make your videos more inclusive and diverse</b></p>
                <p><span><Image src={`/svg/check.svg`} width={20} height={20}/></span>Create your <b>own AI Avatar</b> (your digital twin)</p>
            </div>
          </div>
          <div className='col-xl-8 offset-lg-2 col-lg-10 offset-lg-1'>
            <div className='video-content'>
              <div className="row align-items-center">
                <div className='col-md-8'>
                  <div className='video-inner-content'>
                    <Image src={`/images/video1.png`} layout='responsive' width={800} height={500} />
                    <div className='play-icon1'>
                      <Image src={`/images/play.png`} width={90} height={90}/>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    {videoImages.map((image, index) => (
                      <div className='col-sm-6 video-image' key={index}>
                        <Image src={image.default} />
                        <div className='play-icon'>
                          <Image src={`/images/play.png`} width={35} height={35}/>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='language-section'>
        <div className="row m-0">
          <div className='col-xl-8 offset-xl-2 col-lg-10 offset-lg-1'>
            <h4 className='language-sub-heading'>Supported Languages</h4>
            <h3 className='language-main-heading'>Multilingual</h3>
            <h3 className='language-heading'>Ability to understand and generate content in different languages.</h3>
          </div>
          <div className='col-xl-8 offset-lg-2 col-lg-10 offset-lg-1'>
            <div className='language-logos'>
              {imagesInFirstRow.map((image, index) => (
                <div className='language-image' key={index}>
                  <Image src={image.default} alt={`Language ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className='language-logos'>
              {imagesInSecondRow.map((image, index) => (
                <div className='language-image' key={index + 6}>
                  <Image src={image.default} alt={`Language ${index + 7}`} />
                </div>
              ))}
            </div>
            <div className='language-logos'>
              {imagesInThirdRow.map((image, index) => (
                <div className='language-image' key={index + 11}>
                  <Image src={image.default} alt={`Language ${index + 12}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='testimonial-section'>
        <div className="row m-0">
          <div className='col-xl-8 offset-lg-2 col-lg-10 offset-lg-1'>
            <div className='row align-items-center'>
              <div className='col-md-8'>
                <h4 className='video-sub-heading'>Feedback</h4>
                <h3 className='video-main-heading'>Our Featured Testimonials</h3>
              </div>
              <div className='col-md-4'>
                 <p className='testi-para'>Lorem ipsum dolor sit amet consectetur. Ac in tortor sodales ipsum vel tortor. Egestas vitae elementum quam euismod nunc eros. Feugiat aliquam augue.</p>
              </div>
            </div>
          </div>
          <div className='col-xl-8 offset-lg-2 col-lg-10 offset-lg-1'>
            <div className='testimonial-content'>
              <Testimonial/>
            </div>
          </div>
        </div>
      </div>
      <div className='tools-section'>
        <div className="row m-0">
          <div className='col-xl-4 offset-xl-4 col-lg-6 offset-lg-3'>
            <h4 className='tools-sub-heading'>INTEGRATIONS</h4>
            <h3 className='tools-main-heading'>Embed your videos into your favorite tools</h3>
          </div>
          <div className='col-xl-8 offset-lg-2 col-lg-10 offset-lg-1'>
            <div className='tools-logos'>
              <Tools/>
            </div>
            <div className='text-center'>
              <button className='tools-btn'>Explore all integrations</button>
            </div>
          </div>
        </div>
      </div>
      <div className='poster-section'>
        <div className="row m-0">
          <div className='col-xl-8 offset-lg-2 col-lg-10 offset-lg-1'>
            <div className='poster-inner-content'>
              <h3 className='poster-main-heading'>Lorem ipsum dolor sit amet consectetur. Gravida a.</h3>
              <p className='poster-para'>Lorem ipsum dolor sit amet consectetur. Velit urna massa sit porttitor penatibus. Commodo mattis velit quis consequa.</p>
              <button className='poster-btn'>Get started - It’s free</button>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-section'>
        <div className="row m-0">
          <div className='col-xl-8 offset-lg-2 col-lg-10 offset-lg-1'>
            <div className='footer-inner-content'>
              <div className='row mb-5'>
                <div className='col-lg-12'>
                  <div className='logo-name'>Logo Here</div>
                </div>
                <div className='col-lg-6'>
                  <h3 className='footer-heading'>Subscribe</h3>
                  <p className='footer-para'>Join our newsletter to stay up to date on features and releases.</p>
                  <div className="input-group">
                    <span className="email-icon">&#9993;</span>
                    <input type="email" className="email-input" placeholder="Enter your email" />
                    <button className="subscribe-btn">Subscribe</button>
                  </div>
                  <p className='footer-policy'>By subscribing you agree to with our <span>Privacy Policy</span></p>
                </div>
                <div className='col-lg-3'>
                  <h3 className='footer-heading'>Product</h3>
                  <ul className='footer-list'>
                    <li>AI Assistant</li>
                    <li>Feature</li>
                    <li>Pricing</li>
                    <li>Lorem ipsum</li>
                  </ul>
                </div>
                <div className='col-lg-3'>
                <h3 className='footer-heading'>Company</h3>
                  <ul className='footer-list'>
                    <li>About</li>
                    <li>Privacy Policy</li>
                    <li>Support</li>
                    <li>Terms of Service</li>
                  </ul>
                </div>
              </div>
              <hr/>
              <div className='row mt-3 align-items-center'>
                <div className='col-lg-6'>
                  <div className='footer-copyright'>©2023 Company Name. All right reserved.</div>
                </div>
                <div className='col-lg-6'>
                  <ul className='footer-social-media'>
                    <li><Image src={`/images/social/instagram.png`} width={40} height={40}/></li>
                    <li><Image src={`/images/social/facebook.png`} width={40} height={40}/></li>
                    <li><Image src={`/images/social/twitter.png`} width={40} height={40}/></li>
                    <li><Image src={`/images/social/linkedin.png`} width={40} height={40}/></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
