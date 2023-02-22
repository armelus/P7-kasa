import AboutBanner from '../../components/AboutBanner'
import Collapse from '../../components/Collapse'
import aboutDatas from '../../datas/About.json'

export default function About() {
  return (
    <main>
      <AboutBanner />
      {aboutDatas.map((x, id) => (
        <Collapse
          key={id}
          aboutTitle={x.aboutTitle}
          aboutText={x.aboutText}
          aboutStyle="about-style"
        />
      ))}
    </main>
  )
}
