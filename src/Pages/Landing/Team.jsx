import "./styles/Team.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import TeamBox from "../../Components/TeamBox/TeamBox";

const Team = () => {
  const TEAM__DATA = [
    {
      img: "/team (2).png",
      name: "Atomyc",
      // desc: "Lorem ipsu enim. Integer magna quam, finibus quis elit eget, lacinia tempor enim.",
      role: "Project and Community Manager",
      // socials: { fb: "#", linkedin: "#", insta: "#", twitter: "#" },
    },
    {
      img: "/team (1).png",
      name: "Db009",
      // desc: "adipiscing elit. Nullam at eros id diam venenatis egestas sit amet in enim. Integer magna quam, finibus quis elit eget, lacinia tempor enim.",
      role: "President/CEO/Lead Developer",
      // socials: { fb: "#", linkedin: "#", insta: "#", twitter: "#" },
    },
    {
      img: "/team (8).png",
      name: "Canine Gaming LLC",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at eros id diam venenatis egestas sit amet in enim. Integer magna quam, finibus quis elit eget, lacinia tempor enim.",
      role: "Vice President/COO",
      // socials: { fb: "#", linkedin: "#", insta: "#", twitter: "#" },
    },
    {
      img: "/team (6).png",
      name: "Issa Hussein",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at eros id diam venenatis egestas sit amet in enim. Integer magna quam, finibus quis elit eget, lacinia tempor enim.",
      role: "Unity Developer",
      // socials: { fb: "#", linkedin: "#", insta: "#", twitter: "#" },
    },

    {
      img: "/team (3).png",
      name: "SheriffGOA",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at eros id diam venenatis egestas sit amet in enim. Integer magna quam, finibus quis elit eget, lacinia tempor enim.",
      role: "Marketing/ Developer",
      // socials: { fb: "#", linkedin: "#", insta: "#", twitter: "#" },
    },
    {
      img: "/team (7).png",
      name: "Tim Murosky",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at eros id diam venenatis egestas sit amet in enim. Integer magna quam, finibus quis elit eget, lacinia tempor enim.",
      role: "3D Modeling",
      // socials: { fb: "#", linkedin: "#", insta: "#", twitter: "#" },
    },
    {
      img: "/team (5).png",
      name: "Walshy.GoA",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at eros id diam venenatis egestas sit amet in enim. Integer magna quam, finibus quis elit eget, lacinia tempor enim.",
      role: "Solidity/Frontend Developer",
      // socials: { fb: "#", linkedin: "#", insta: "#", twitter: "#" },
    },
    {
      img: "/team (4).png",
      name: "Walk_walsh.GoA",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at eros id diam venenatis egestas sit amet in enim. Integer magna quam, finibus quis elit eget, lacinia tempor enim.",
      role: "Solidity/Frontend Developer",
      // socials: { fb: "#", linkedin: "#", insta: "#", twitter: "#" },
    },
  ];
  return (
    <div id="team" className="container">
      <div className="team-div">
        <h2 className="title trajan">Core Team</h2>
        <Splide
          options={{
            rewind: true,
            width: "90%",
            gap: "1rem",
            pagination: false,
            perPage: 3,
            type: "loop",
            arrows: true,
            perMove: 1,
            drag: true,
            breakpoints: {
              1245: {
                perPage: 2,
              },
              865: {
                perPage: 1,
              },
            },
          }}
          hasTrack={false}
        >
          <SplideTrack>
            {TEAM__DATA.map((elem, idx) => {
              return (
                <SplideSlide key={"team" + idx}>
                  <TeamBox {...elem} />
                </SplideSlide>
              );
            })}
          </SplideTrack>

          <div className="splide__arrows">
            <img
              className="splide__arrow splide__arrow--prev"
              src="/arrow-left.png"
              alt=""
            />

            <img
              className="splide__arrow splide__arrow--next"
              src="/arrow-right.png"
              alt=""
            />
          </div>
        </Splide>
      </div>
    </div>
  );
};

export default Team;
