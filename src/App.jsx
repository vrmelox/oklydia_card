import Info from './components/Info'
import lydia from './assets/lydia.jpg'
import Description from './components/description';
import Footer from './components/Footer';
import './styles/app.css'
const lydiaProfile = {
  name: "Lydia Melo",
  job: "CEO OK LYDIA Inc.",
  email: "lydia@oklydia.com",
  image: lydia,
};

const About = {
  title: "About",
  text: "Founder of OK LYDIA Inc, I'm passionate about revealing the natural beauty of every woman. Deeply convinced that every woman is a queen, I elevate her to the rank of the most august."
};

const interests = {
  title: "Interests",
  text: "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
};

function App() {
    return (
      <div className='container'>
        <Info profile={lydiaProfile} />
        <Description paragraphe={About} />
        <Description paragraphe={interests} />
        <Footer />
      </div>
    )
}

export default App
