import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="downCont">
      <div className="contentCont">
        <h1 className="headEdit">Clothes That Get YOU Noticed</h1>
        <p className="paraEdit">
          Fashion is part of the daily air Wikipedia makes certain efforts at
          reliability that search engines like Google do not, including its own
          system of peer-review. Still, Wikipedia has different priorities than
          an academic peer-reviewed resource, and therefore it should not be
          used in place of an academic source.
        </p>
        <button type="button" className="btnEdit">
          Shop Now
        </button>
      </div>
      <img
        alt="clothes that get you noticed"
        className="clothesImgEdit"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
      />
    </div>
  </div>
)

export default Home
