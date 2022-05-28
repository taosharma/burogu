import Welcome from '../../components/Welcome'
import About from '../../components/About'
import FeaturedBlog from '../../components/FeaturedBlog'

import firstBlog from '../../data/firstBlog.json'

function Home() {
  return (
    <div className="Home">
      <Welcome />
      <About />
      <FeaturedBlog blog={firstBlog} />
    </div>
  )
}

export default Home
