import Image from "next/image";
// import Reaction from "components/svgs/reaction.svg";
import ReactionPage from "../../components/reaction";
import MemoryPage from "../../components/memory";
import VerbalPage from "../../components/verbal";
import VisualPage from "../../components/visual";
import Memory from "components/svgs/icon-memory.svg";
import Verbal from "components/svgs/icon-verbal.svg";
import Visual from "components/svgs/icon-visual.svg";

export default function Home() {
  return (
    <main className="mainBox">
      <div className="statBox">
        <div className="rotBox">
          <div className="txtclr">
            <p>Your Result</p>
          </div>
          <div className="circleBox">
            <div style={{ fontSize: "50px", fontWeight: "800" }}>76</div>
            <div style={{ fontSize: "13px", color: "var(--light-lavender)" }}>
              of 100
            </div>
          </div>
          <div style={{ fontSize: "24px", fontWeight: "500" }}>
            <p>Great</p>
          </div>

          <div className="randomTxt">
            You scored higher than 65% of the people who have taken these tests.
          </div>
        </div>
        <div className="statusWindow">
          <div className="gamerGoo">
            <p>&nbsp;&nbsp;&nbsp;Summary</p>
          </div>
          <div className="attributesCollection">
            <div className="reactionBox">
              <div className="reactionTxtBig">
                <div style={{ display: "flex" }}>
                  <div style={{ height: "12px", width: "12px" }}>
                    <ReactionPage />
                  </div>
                  <div style={{ color: "var(--light-red)" }}>
                    &nbsp;Reaction
                  </div>
                </div>
              </div>
              <div className="reactionScore">
                87 <div className="outOf100">&nbsp;/&nbsp;100</div>
              </div>
            </div>
            <div
              className="reactionBox"
              style={{ backgroundColor: "hsla(39, 100%, 56%,0.05)" }}
            >
              <div className="reactionTxtBig">
                <div style={{ display: "flex" }}>
                  <div style={{ height: "12px", width: "12px" }}>
                    <MemoryPage />
                  </div>
                  <div style={{ color: "var(--orangey-yellow)" }}>
                    &nbsp;Memory
                  </div>
                </div>
              </div>
              <div className="reactionScore">
                92 <div className="outOf100">&nbsp;/&nbsp;100</div>
              </div>
            </div>
            <div
              className="reactionBox "
              style={{ backgroundColor: "hsla(166, 100%, 37%,0.05)" }}
            >
              <div className="reactionTxtBig">
                <div style={{ display: "flex" }}>
                  <div style={{ height: "12px", width: "12px" }}>
                    <VerbalPage />
                  </div>
                  <div style={{ color: "var(--green-teal)" }}>&nbsp;Verbal</div>
                </div>
              </div>
              <div className="reactionScore">
                61 <div className="outOf100">&nbsp;/&nbsp;100</div>
              </div>
            </div>
            <div
              className="reactionBox "
              style={{ backgroundColor: "hsla(234, 85%, 45%,0.05)" }}
            >
              <div className="reactionTxtBig">
                <div style={{ display: "flex" }}>
                  <div style={{ height: "12px", width: "12px" }}>
                    <VisualPage />
                  </div>
                  <div style={{ color: "var(--cobalt-blue)" }}>
                    &nbsp;Visual
                  </div>
                </div>
              </div>
              <div className="reactionScore">
                72 <div className="outOf100">&nbsp;/&nbsp;100</div>
              </div>
            </div>
          </div>
            <button className="continueButton">Continue</button>
        </div>
      </div>
    </main>
  );
}
