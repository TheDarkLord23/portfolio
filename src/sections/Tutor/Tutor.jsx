import styles from "./TutorStyles.module.css";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.svg";
import { useTheme } from "../../common/ThemeContext";
import IMG from "../../assets/Tutor/banner.jpg";
import vscode from "../../assets/vscode.png";
import figma from "../../assets/figma.png";
import photoshop from "../../assets/photoshop.png";
import Language from "../../common/Language";
import Footer from "../Footer/Footer";
import Hero from "../../assets/Tutor/Hero.png";
import Review from "../../assets/Tutor/Review.png";
import FooterPic from "../../assets/Tutor/FooterPic.png";
import Courses from "../../assets/Tutor/Courses.png";
import Contact from "../../assets/Tutor/Contact.png";
import Login from "../../assets/Tutor/Login.png";
import Register from "../../assets/Tutor/Register.png";
import StudentDash from "../../assets/Tutor/StudentDash.png";
import ProfileUpdate from "../../assets/Tutor/ProfileUpdate.png";
import MyReviews from "../../assets/Tutor/MyReviews.png";
import TeacherDash from "../../assets/Tutor/TeacherDash.png";
import Allusers from "../../assets/Tutor/Allusers.png";
import Enrolled from "../../assets/Tutor/Enrolled.png";
import AdminDash from "../../assets/Tutor/AdminDash.png";
import CourseCreate from "../../assets/Tutor/CourseCreate.png";
import UserCreate from "../../assets/Tutor/UserCreate.png";
import UserUpdate from "../../assets/Tutor/UserUpdate.png";
import CourseUpdate from "../../assets/Tutor/CourseUpdate.png";
import Upcoming from "../../assets/Tutor/Upcoming.png";
import Logo from "../../assets/Tutor/Logo.png";

function Tutor() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;

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
          <div className={styles.projectTopSection}>
            <div className={styles.title}>
              <h1>Tutor Masters</h1>
              <p className={styles.description}>
                Unlock your potential with the best University Tutors
              </p>
            </div>
            <a
              href="https://github.com/TheDarkLord23/Tutor-Masters"
              target="blank"
            >
              <button className={styles.codeBtn} id={styles.code}>
                Code
              </button>
            </a>
          </div>
          <hr />
          <div className={styles.about}>
            <h3>Wlecome to Tutor Masters!</h3>
            <section className={styles.projectDescription}>
              <p>
                This is a final project for graduating as a Full Stack
                Developer. We worked as a team of 5 people. I was the lead of
                the Front End team. I was in charge of designing the index,
                courses, dashboard and other pages and making them
                responsive(With 2 breakpoints for now).
              </p>
              <br />
              <h4>The task looks like this:</h4>
              <p>
                The goal is to create an engaging and professionally styled page
                for a trainer that prepares students for the entry exams to
                certain Universities.
              </p>

              <h4>Must have</h4>
              <p>
                The website should be well-designed, easy to navigate, and have
                a clean, modern layout. Allow users to create accounts, log in,
                and view/edit their profiles.
              </p>

              <h4>Student</h4>

              <p>
                See all the available areas of tutoring (I.e. biology, physics,
                chemistry etc.) and all the details about them. Option to book
                tutoring Information on when booking is still possible (I.e. a
                calendar displaying when times are I.e. already booked) Ability
                to change availability on certain dates/time blocks manually
                (ease of use would be important) Filter the tutoring based on
                the universities/subjects Information about the trainer Perform
                the CRUD for review, and also be able to view reviews from the
                past students.
              </p>

              <h4>Trainer</h4>

              <p>
                Perform CRUD for a certain tutoring service Manage customer
                bookings, check bookings, and update availability calendars.
                (CRUD) View the information about the student.
              </p>

              <h4>Admin</h4>

              <p>
                Perform the CRUD for users. Perform the CRUD for tutoring
                services Perform CRUD for the bookings.
              </p>

              <h4>Nice to have</h4>

              <p>
                Linking of availability calendar with project “tutoring
                services" Option for multiple trainers to exist and to see which
                trainings they are assigned to.
              </p>

              <h4>How to run the project</h4>
              <p>
                For running the project you will need XAMPP and VS Code. Run
                XAMPP and import the tutoring_service.sql in your PhpMyAdmin
                database. Open the files in VS Code and serve the project with
                the "PHP Server" extension.
              </p>
            </section>
          </div>
        </div>
        <div className={styles.right}>
          <img src={IMG} alt="Tutor Thumbnail" className={styles.thumbnail} />
          <hr />
          <div className={styles.info}>
            <div className={styles.infoInner}>
              <h3>Programs:</h3>
              <div className={styles.programs}>
                <img src={vscode} alt="Visual Studio Code" />
                <img src={figma} alt="Figma" />
                <img src={photoshop} alt="Adobe Photoshop" />
              </div>
              <h3>Languages:</h3>
              <div className={styles.languageChart}>
                <div className={styles.PHP}></div>
                <div className={styles.JavScript}></div>
                <div className={styles.CSS}></div>
                <div className={styles.other}></div>
              </div>
              <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                  <span className={styles.dotPHP}></span>
                  <Language language="PHP" percent="66.9%" />
                </div>
                <div className={styles.gridItem}>
                  <span className={styles.dotJS}></span>
                  <Language language="CSS" percent="29.1%" />
                </div>
                <div className={styles.gridItem}>
                  <span className={styles.dotCSS}></span>
                  <Language language="JavaScript" percent="3.6%" />
                </div>
                <div className={styles.gridItem}>
                  <span className={styles.dotOther}></span>
                  <Language language="Other" percent="0.5%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
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
          <a href="#CRUD">
            <button
              className={
                theme === "dark"
                  ? styles.highlightsBtnDark
                  : styles.highlightsBtnLight
              }
            >
              CRUD
            </button>
          </a>
          <a href="#Student">
            <button
              className={
                theme === "dark"
                  ? styles.highlightsBtnDark
                  : styles.highlightsBtnLight
              }
            >
              Student
            </button>
          </a>
          <a href="#Tutor">
            <button
              className={
                theme === "dark"
                  ? styles.highlightsBtnDark
                  : styles.highlightsBtnLight
              }
            >
              Tutor
            </button>
          </a>
          <a href="#Admin">
            <button
              className={
                theme === "dark"
                  ? styles.highlightsBtnDark
                  : styles.highlightsBtnLight
              }
            >
              Admin
            </button>
          </a>
        </div>
        <div id="Components" className={styles.ComponentsDiv}>
          <h1>Components</h1>
          <div className={styles.LogoDiv}>
            <img src={Logo} title="Logo" className={styles.Logo} />
            <div className={styles.Text}>
              <p>
                The "Tutor Masters" logo features a clean, modern graduation cap
                symbolizing academic achievement and excellence. Designed with
                sleek lines and balanced proportions, the cap represents the
                website's mission to help students prepare for university exams.
                Created using Photoshop, this logo effectively captures the
                essence of learning and success, making it a perfect fit for a
                platform that connects students with expert tutors.
              </p>
            </div>
          </div>
          <img src={Hero} title="Hero" className={styles.Hero} />
          <img src={Upcoming} title="Upcoming" className={styles.Upcoming} />
          <img src={Review} title="Review" className={styles.Review} />
          <img src={FooterPic} title="FooterPic" className={styles.FooterPic} />
          <img src={Contact} title="Contact" className={styles.Contact} />
          <img src={Login} title="Login" className={styles.Login} />
          <img src={Register} title="Register" className={styles.Register} />
          <img src={Courses} title="Courses" className={styles.Courses} />
          <img
            src={StudentDash}
            title="StudentDash"
            className={styles.StudentDash}
          />
          <img
            src={ProfileUpdate}
            title="ProfileUpdate"
            className={styles.ProfileUpdate}
          />
          <img src={MyReviews} title="MyReviews" className={styles.MyReviews} />
          <img
            src={TeacherDash}
            title="TeacherDash"
            className={styles.TeacherDash}
          />
          <img src={Enrolled} title="Enrolled" className={styles.Enrolled} />
          <img src={AdminDash} title="AdminDash" className={styles.AdminDash} />
          <img src={Allusers} title="Allusers" className={styles.Allusers} />
          <img
            src={UserCreate}
            title="UserCreate"
            className={styles.UserCreate}
          />
          <img
            src={UserUpdate}
            title="UserUpdate"
            className={styles.UserUpdate}
          />
          <img
            src={CourseCreate}
            title="CourseCreate"
            className={styles.CourseCreate}
          />
          <img
            src={CourseUpdate}
            title="CourseUpdate"
            className={styles.CourseUpdate}
          />
        </div>
      </div>
    </section>
  );
}

export default Tutor;
