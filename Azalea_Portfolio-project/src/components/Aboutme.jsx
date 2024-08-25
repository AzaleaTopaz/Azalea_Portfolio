import '../Components-style/aboutme.css'

export default function Aboutme() {
    return (
    <div className='aboutme'>
        <div className='bio-sub'>
            <h1>Hey there.</h1>
            <h1> My name is</h1>
            <h1>Azalea Topaz Nikitin.</h1>            
        <div className='bio-details'>
            <p>I am a junior software developer based in NYC, recently certified in Software Engineering through General Assembly. With a background as a multidisciplinary artist, I am passionate about bringing a unique perspective to crafting exceptional user experiences.</p>
            <p>Living in NYC most of my life, I find pleasure in connecting with others and always learning something new.</p>
            </div>
        </div>
        <div className='profileimage'>
            <img src='./project_screenshots/IMG_9151.jpg' alt='profile piccture of Azalea Nikitin' className='aboutme-image'/>
            </div>
      </div>
    )
}