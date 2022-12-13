import "./styles/Team.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import TeamBox from "../../Components/TeamBox/TeamBox";

const Team = () => {
  const TEAM__DATA = [
    {
      img: "/team1.png",
      name: "SheriffGOA",
      desc: "adipiscing elit. Nullam at eros id diam venenatis egestas sit amet in enim. Integer magna quam, finibus quis elit eget, lacinia tempor enim.",
      role: "Marketing/ Developer",
      socials: { fb: "#", linkedin: "#", insta: "#", twitter: "#" },
    },
    {
      img: "/team2.png",
      name: "Walk Walsh",
      desc: "Lorem ipsu enim. Integer magna quam, finibus quis elit eget, lacinia tempor enim.",
      role: "Solidity/Frontend Developer",
      socials: { fb: "#", linkedin: "#", insta: "#", twitter: "#" },
    },
    {
      img: "/team3.png",
      name: "Walshy",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at eros id diam venenatis egestas sit amet in enim. Integer magna quam, finibus quis elit eget, lacinia tempor enim.",
      role: "Solidity/Frontend Developer",
      socials: { fb: "#", linkedin: "#", insta: "#", twitter: "#" },
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
