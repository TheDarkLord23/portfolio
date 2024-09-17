import styles from "./AlumniStyles.module.css";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.svg";
import { useTheme } from "../../common/ThemeContext";
import IMG from "../../assets/Alumni/Thumbnail.png";
import ScrollToTopButton from "../../common/ScrollToTop.jsx";
import vscode from "../../assets/vscode.png";
import figma from "../../assets/figma.png";
import photoshop from "../../assets/photoshop.png";
import Angular from "../../assets/angular.png";
import Language from "../../common/Language";
import LogoDark from "../../assets/Alumni/Dark mode/logo.png";
import LogoLight from "../../assets/Alumni/Light mode/logo.png";
import FactoryDark from "../../assets/Alumni/Dark mode/factory.png";
import FactoryLight from "../../assets/Alumni/Light mode/factory.png";
import NumbersDark from "../../assets/Alumni/Dark mode/numbers.png";
import NumbersLight from "../../assets/Alumni/Light mode/numbers.png";
import ColorDark from "../../assets/Alumni/Dark mode/color.png";
import ColorLight from "../../assets/Alumni/Light mode/color.png";
import Hero from "../../assets/Alumni/Elements/Hero.png";
import Testimonials from "../../assets/Alumni/Elements/testimonials.mp4";
import About from "../../assets/Alumni/Elements/AboutUs.png";
import Events from "../../assets/Alumni/Elements/Events.png";
import Alumni1 from "../../assets/Alumni/Elements/Alumni.png";
import AlumniDetails from "../../assets/Alumni/Elements/AlumniDetails.png";
import OpportIndex from "../../assets/Alumni/Elements/OpportIndex.png";
import OpportFS from "../../assets/Alumni/Elements/OpportFS.png";
import OpporttJS from "../../assets/Alumni/Elements/OpporttJS.png";
import OpportTop from "../../assets/Alumni/Elements/OpportTop.png";
import OpporttP from "../../assets/Alumni/Elements/OpporttP.png";
import JobOffers from "../../assets/Alumni/Elements/JobOffers.png";
import Footer from "../Footer/Footer";

function Alumni() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const Logo = theme === "light" ? LogoLight : LogoDark;
  const Factory = theme === "light" ? FactoryLight : FactoryDark;
  const Numbers = theme === "light" ? NumbersLight : NumbersDark;
  const Color = theme === "light" ? ColorLight : ColorDark;

  return (
    <section id="project" className={styles.container}>
      <div className={styles.topSection}>
        <a href="/#projects">
          <button className="hover" id={styles.home}>
            Home
          </button>
        </a>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <img
            src={IMG}
            alt="Tutor Thumbnail"
            className={styles.thumbnailMobile}
          />

          <div className={styles.projectTopSection}>
            <div className={styles.title}>
              <h1>Code Factory Alumni</h1>
              <p className={styles.description}>
                Unveiling the Success Stories of Code Factory graduates
              </p>
            </div>
            <a href="https://github.com/TheDarkLord23/Alumni" target="blank">
              <button className={styles.codeBtn} id={styles.code}>
                Code
              </button>
            </a>
          </div>
          <hr className={styles.divider} />
          <div className={styles.about}>
            <h3>Wlecome to Code Factory Alumni!</h3>
            <section className={styles.projectDescription}>
              <p>
                This is a final project for graduating as a Front End Developer.
                We worked as a team of 5 people. I focused on making the Logo,
                the "Career opportunities" and "Job offers" with the responsive.
              </p>
              <br />
              <h4>The task looks like this:</h4>
              <p>
                The alumni website should consist of five sections: Home page,
                Alumni directory, Stories, Careers and Events. The purpose of
                the website is to give all necessary information about alumni.
              </p>

              <h4>Must have</h4>
              <p>
                Alumni information, Success stories, Career opportunities,
                Events at CodeFactory or somewhere else that can be interesting
                for alumni.
              </p>

              <h4>Requirements</h4>

              <p>
                Website must be fully responsive. Alumni directory should have a
                list of all alumni, their name and photo and when the user
                clicks on the specific profile should get information about
                alumni’s career as well as information about the achievements
                during the studies at CodeFactory. Stories is a page with
                success stories of alumni’s. Page Careers must have articles
                about job opportunities as well as information about companies
                that are interested in employing alumnis. Events page must have
                dates of events as well as all necessary information about the
                event like: type of event, date, location. The home page should
                be present most popular information of pages Stories, Careers
                and Events as well as give the information about the page
                purpose.
              </p>
            </section>
          </div>
        </div>
        <div className={styles.right}>
          <img src={IMG} alt="Tutor Thumbnail" className={styles.thumbnail} />
          <hr className={styles.divider} />
          <div className={styles.info}>
            <div className={styles.infoInner}>
              <h3>Programs:</h3>
              <div className={styles.programs}>
                <img src={Angular} alt="Angular" />
                <img src={vscode} alt="Visual Studio Code" />
                <img src={figma} alt="Figma" />
                <img src={photoshop} alt="Adobe Photoshop" />
              </div>
              <h3>Languages:</h3>
              <div className={styles.languageChart}>
                <div className={styles.SCSS}></div>
                <div className={styles.HTML}></div>
                <div className={styles.TypeScript}></div>
              </div>
              <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                  <span className={styles.dotSCSS}></span>
                  <Language language="SCSS" percent="42.8%" />
                </div>
                <div className={styles.gridItem}>
                  <span className={styles.dotHTML}></span>
                  <Language language="HTML" percent="33.9%" />
                </div>
                <div className={styles.gridItem}>
                  <span className={styles.dotTypeScript}></span>
                  <Language language="TypeScript" percent="23.3%" />
                </div>
              </div>
              <div className={styles.contributors}>
                <h3>Contributors:</h3>
                <div className={styles.contributorsGrid}>
                  <a
                    href="https://github.com/LizaKata"
                    className={styles.contributor}
                    target="blank"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/78230883?v=4"
                      alt="lisaProfileImg"
                    />
                    <h4>Lisa</h4>
                  </a>

                  <a
                    href="https://github.com/UchiaLord"
                    className={styles.contributor}
                    target="blank"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/121878603?v=4"
                      alt="BenediktProfileImg"
                    />
                    <h4>Benedikt</h4>
                  </a>

                  <a
                    href="https://github.com/borisvlaovic"
                    className={styles.contributor}
                    target="blank"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/151388829?v=4"
                      alt="BorisProfileImg"
                    />
                    <h4>Boris</h4>
                  </a>
                  <a
                    href="https://github.com/DacianSB"
                    className={styles.contributor}
                    target="blank"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/156659670?v=4"
                      alt="DacianProfileImg"
                    />
                    <h4>Dacian</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.highlights}>
        <h1>Project Highlights</h1>
        <div className={styles.btns}>
          <a href="#Components">
            <button
              className={
                theme === "dark"
                  ? styles.highlightsBtnDark
                  : styles.highlightsBtnLight
              }
            >
              Components
            </button>
          </a>

          <a href="#Alumni">
            <button
              className={
                theme === "dark"
                  ? styles.highlightsBtnDark
                  : styles.highlightsBtnLight
              }
            >
              Alumni
            </button>
          </a>
          <a href="#Events">
            <button
              className={
                theme === "dark"
                  ? styles.highlightsBtnDark
                  : styles.highlightsBtnLight
              }
            >
              Events
            </button>
          </a>
          <a href="#Careers">
            <button
              className={
                theme === "dark"
                  ? styles.highlightsBtnDark
                  : styles.highlightsBtnLight
              }
            >
              Careers
            </button>
          </a>
        </div>
        <div id="Components" className={styles.ComponentsDiv}>
          <h1>Index</h1>
          <div className={styles.LogoOuterDiv}>
            <div className={styles.LogoDiv}>
              <img src={Logo} title="Logo" className={styles.Logo} />
              <div className={styles.innerText}>
                <h3>Components</h3>
                <p>
                  In the Code Factory Alumni logo I have combined the concept of
                  a factory with a digital theme. The orange silhouette of a
                  factory chimney forms the central figure, symbolizing the idea
                  of production and creation. Instead of traditional smoke, a
                  stream of binary code (1s and 0s) emerges from the chimney,
                  representing the output of coding and programming knowledge.
                  The industrial design of the factory paired with the
                  tech-driven binary "smoke" effectively conveys the company's
                  focus on developing skilled coders and digital creators.
                </p>
              </div>
            </div>
            <h2>Logo Elements</h2>
            <div className={styles.LogoElementsDiv}>
              <div className={styles.Element}>
                <img
                  className={styles.ElementImg}
                  src={Factory}
                  alt="Factory"
                />
                <h3>Factory</h3>
              </div>
              <div className={styles.Element}>
                <img
                  className={styles.ElementImg}
                  src={Numbers}
                  alt="Numbers"
                />
                <h3>Binary Code</h3>
              </div>
              <div className={styles.Element}>
                <img className={styles.ElementImg} src={Color} alt="Color" />
                <h3>Accent Color</h3>
              </div>
            </div>
          </div>

          <div className={styles.heroDiv}>
            <div className={styles.innerText}>
              <h3>Hero</h3>
              <p>
                Featuring a vector image alongside our motto to set the tone. A
                prominent call-to-action button encourages immediate engagement,
                while the highlights beneath showcase the key benefits we
                provide.
              </p>
            </div>
            <img src={Hero} title="Hero" className={styles.Hero} />
          </div>

          <div className={styles.aboutDiv}>
            <img src={About} title="About" className={styles.About} />
            <div className={styles.innerText}>
              <h3>About</h3>
              <p>
                This section consists of a small introoduction and information
                about us and our work, a picture focusing on the learning
                environment in our facility and a CTA button leading to our
                application form.
              </p>
            </div>
          </div>

          <div className={styles.vidDiv}>
            <div className={styles.innerText}>
              <h3>Testimonials</h3>
              <p>
                3 Cards with animation on hover that showcase some of our
                graduates' testimonials as well as a CTA button leading to all
                the testimonials.
              </p>
            </div>
            <video className={styles.vid} autoPlay loop muted playsInline>
              <source src={Testimonials} type="video/mp4" />
            </video>
          </div>

          <div id="Alumni" className={styles.AlumniDiv}>
            <h1>Alumni</h1>
            <div className={styles.innerAlumniDiv}>
              <p>
                Here the user can see our most successful Alumni and read about
                their accomplishments in the field of Programming.
              </p>
              <img src={Alumni1} title="Alumni1" className={styles.Alumni1} />
              <img
                src={AlumniDetails}
                title="AlumniDetails"
                className={styles.AlumniDetails}
              />
            </div>
          </div>

          <div id="Events" className={styles.EventsDiv}>
            <h1>Events</h1>
            <p>
              Featuring a carousel slider with reviews from students who have
              attended or are attending a certan course.
            </p>
            <div className={styles.InnerEventsDiv}>
              <img src={Events} title="Events" className={styles.Events} />
            </div>
          </div>

          <div id="Careers" className={styles.CareersDiv}>
            <h1>Career</h1>
            <p>
              Here the User can choose to read about the Career Opportunities he
              will have as a CodeFactory Alumni or see our Job Offers page.
            </p>
            <img
              src={OpportIndex}
              title="OpportIndex"
              className={styles.CareersIMG}
            />

            <div className={styles.OpportDiv}>
              <img
                src={OpportTop}
                title="OpportTop"
                className={styles.OpportTop}
              />
              <div className={styles.innerText}>
                <h3>Career Opportunities</h3>
                <p>
                  The hero section consists of some information about the page
                  content and buttons that scroll down the page to the selected
                  topic.
                </p>
              </div>
            </div>
            <img
              src={OpportFS}
              title="OpportFS"
              className={styles.CareersIMG}
            />
            <img
              src={OpporttP}
              title="OpporttP"
              className={styles.CareersIMG}
            />
            <img
              src={OpporttJS}
              title="OpporttJS"
              className={styles.CareersIMG}
            />
            <div className={styles.JobsDiv}>
              <img
                src={JobOffers}
                title="JobOffers"
                className={styles.JobOffers}
              />
              <div className={styles.JobsInner}>
                <h3>Job Offers</h3>
                <p>
                  The Job Offers are all for Programmers and are all suitable
                  for Code Factory Alumni. The User can see the most important
                  information about the offer here as well as click the "To
                  Offer" button which leads to the original Job Offer website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton></ScrollToTopButton>
      <Footer></Footer>
    </section>
  );
}

export default Alumni;
