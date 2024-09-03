import styles from "./TutorStyles.module.css";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.svg";
import { useTheme } from "../../common/ThemeContext";
import IMG from "../../assets/Tutor/banner.jpg";
import ScrollToTopButton from "../../common/ScrollToTop.jsx";
import vscode from "../../assets/vscode.png";
import figma from "../../assets/figma.png";
import photoshop from "../../assets/photoshop.png";
import Language from "../../common/Language";
import Footer from "../Footer/Footer";
import Hero from "../../assets/Tutor/Hero.png";
import Review from "../../assets/Tutor/Review.png";
import Courses from "../../assets/Tutor/Courses.png";
import Contact from "../../assets/Tutor/Contact.png";
import Login from "../../assets/Tutor/Login.png";
import Register from "../../assets/Tutor/Register.png";
import StudentDash from "../../assets/Tutor/StudentDash.png";
import ProfileUpdate from "../../assets/Tutor/ProfileUpdate.png";
import MyReviews from "../../assets/Tutor/MyReviews.png";
import ReviewUpdate from "../../assets/Tutor/ReviewUpdate.png";
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
      <h1>RESPONSIVE SECTION</h1>
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
          <hr className={styles.divider} />
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
          <hr className={styles.divider} />
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
              <div className={styles.contributors}>
                <h3>Contributors:</h3>
                <div className={styles.contributorsGrid}>
                  <a
                    href="https://github.com/relaxedomlette"
                    className={styles.contributor}
                    target="blank"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/156616153?v=4"
                      alt="AnnaProfileImg"
                    />
                    <h4>Anna</h4>
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
            <div className={styles.innerText}>
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

          <div className={styles.upcomingDiv}>
            <img src={Upcoming} title="Upcoming" className={styles.Upcoming} />
            <div className={styles.innerText}>
              <h3>Upcoming Courses</h3>
              <p>
                This section showcases 4 of the upcoming courses on Tutor
                Masters.
              </p>
            </div>
          </div>

          <div className={styles.reviewsDiv}>
            <div className={styles.innerText}>
              <h3>Reviews</h3>
              <p>
                Featuring a carousel slider with reviews from students who have
                attended or are attending a certan course.
              </p>
            </div>
            <img src={Review} title="Review" className={styles.Review} />
          </div>

          <div className={styles.contactsDiv}>
            <img src={Contact} title="Contact" className={styles.Contact} />
            <div className={styles.innerText}>
              <h3>Contacts</h3>
              <p>
                Using Google Maps map displaying our current location, a
                floating-like section with our opening hours and contact
                information and a functioning contact form.
              </p>
            </div>
          </div>

          <div className={styles.contactsDiv}>
            <img src={Login} title="Login" className={styles.Login} />
            <div className={styles.innerText}>
              <h3>Login and Registration</h3>
              <p>
                Two cleand and simple forms for fast logging in or registration
                with option for uploading a profile picture.
              </p>
            </div>
            <img src={Register} title="Register" className={styles.Register} />
          </div>

          <div className={styles.contactsDiv}>
            <div className={styles.innerText}>
              <h3>Courses</h3>
              <p>
                The Courses page displays all available courses on our website.
                Featuring a custom JavaScript filter that helpes the user search
                for courses without refreshing the page.
              </p>
            </div>
            <img src={Courses} title="Courses" className={styles.Courses} />
          </div>
          <div id="Student" className={styles.StudentDiv}>
            <h1>Student</h1>
            <div className={styles.dashboardStudentDiv}>
              <p>
                The user with role Student has a custom dashboard from where he
                can acces his booked courses (upcoming, ongoing or finished),
                view and update his reviews, have acces to the calendar
                containing the schedule for all courses as well as updating his
                profile information.
              </p>
              <img
                src={StudentDash}
                title="StudentDash"
                className={styles.StudentDash}
              />
            </div>
            <div className={styles.underStudentDiv}>
              <img
                src={ProfileUpdate}
                title="ProfileUpdate"
                className={styles.ProfileUpdate}
              />
              <div className={styles.ReviewDiv}>
                <img
                  src={MyReviews}
                  title="MyReviews"
                  className={styles.MyReviews}
                />
                <img
                  src={ReviewUpdate}
                  title="ReviewUpdate"
                  className={styles.ReviewUpdate}
                />
              </div>
            </div>
          </div>
          <div id="Tutor" className={styles.TutorDiv}>
            <h1>Tutor</h1>
            <p>
              From his dashboard, the user with role Tutor again has acces to
              the calendar and his profile info. He can view and edit all of his
              courses (upcoming, ongoing or finished) as well as create new
              courses. He also has access to all students enrolled a certain
              course with an option to remove the student from the course.
            </p>
            <img
              src={TeacherDash}
              title="TeacherDash"
              className={styles.TeacherDash}
            />
            <div className={styles.underTutorDiv}>
              <img
                src={Enrolled}
                title="Enrolled"
                className={styles.Enrolled}
              />
              <img
                src={CourseUpdate}
                title="CourseUpdate"
                className={styles.CourseUpdate}
              />
            </div>
          </div>

          <div id="Admin" className={styles.AdminDiv}>
            <h1>Admin</h1>
            <p>
              The Admin has full control over the platform, including all the
              capabilities of the Student and Tuto roles. He can view all
              registered accounts as well as edit and create new ones. He can
              also choose or change the role of the new or already existing
              account.
            </p>
            <img
              src={AdminDash}
              title="AdminDash"
              className={styles.AdminDash}
            />
            <img src={Allusers} title="Allusers" className={styles.Allusers} />
            <div className={styles.underAdminDiv}>
              <img
                src={UserUpdate}
                title="UserUpdate"
                className={styles.UserUpdate}
              />
              <img
                src={UserCreate}
                title="UserCreate"
                className={styles.UserCreate}
              />
              <img
                src={CourseCreate}
                title="CourseCreate"
                className={styles.CourseCreate}
              />
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton></ScrollToTopButton>
      <Footer></Footer>
    </section>
  );
}

export default Tutor;
