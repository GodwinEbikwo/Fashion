import React from "react";
import Image from "next/image";

export default function Cases() {
  return (
    <section className="cases" id="contact">
      <div className="intro h">
        <div className="left">
          <h3>Projects 2020</h3>
          <h3>Projects 2020</h3>
        </div>
        <div className="right">
          <div className="rightText">
            Below are some of my projects, where I showcase different
            technologies learnt in the crazy year of 2020 (skip if you just want
            to go the my blog)
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="wrapper1">
          <a href="" className="item1">
            <figure className="itemimg-1">
              <div className="potrait">
                <Image src="/01.jpg" width={400} height={690} />
              </div>
            </figure>

            <div className="item-w">
              <div className="item-b">
                <div className="titles">
                  <h3 className="item-title">TweentyOne</h3>
                  <h3 className="item-title sub">D&D</h3>
                </div>

                <div className="vp">
                  <div className="vp-cap">
                    <div className="vp-t">View project</div>
                  </div>
                </div>
                <div className="capline"></div>
              </div>

              <div className="item-no">
                <div className="number">1</div>
              </div>
            </div>
          </a>
        </div>

        <div className="wrapper2">
          <a href="#" className="item2">
            <figure className="itemimg-2">
              <div className="potrait">
                <Image src="/10.jpg" width={447} height={559} />
              </div>
            </figure>

            <div className="item-w no2">
              <div className="item-b">
                <div className="titles">
                  <h3 className="item-title">Titan</h3>
                  <h3 className="item-title sub">Marketing</h3>
                </div>
                <div className="vp">
                  <div className="vp-cap">
                    <div className="vp-t">View project</div>
                  </div>
                </div>
              </div>

              <div className="item-no">
                <div className="number no2">2</div>
              </div>
            </div>
          </a>
        </div>

        <div className="wrapper3">
          <a href="#" className="item3">
            <figure className="itemimg-3">
              <div className="potrait">
                <Image src="/07.jpg" width={550} height={500} />
              </div>
            </figure>

            <div className="item-w no3">
              <div className="item-b">
                <div className="titles">
                  <h3 className="item-title">Plannify</h3>
                  <h3 className="item-title sub">Landing page</h3>
                </div>
                <div className="vp">
                  <div className="vp-cap">
                    <div className="vp-t">View project</div>
                  </div>
                </div>
              </div>

              <div className="item-no">
                <div className="number no2">3</div>
              </div>
            </div>
          </a>
        </div>

        <Wrapper4
          src={"/04.jpg"}
          width={499}
          height={600}
          num={4}
          name={"Segun"}
          surname={"Portfolio"}
        />

        {/* <Wrapper3
          src={"/08.jpg"}
          width={640}
          height={427}
          num={5}
          name={"Marie"}
          surname={"Timothé"}
        /> */}
        <Wrapper5
          src={"/08.jpg"}
          width={550}
          height={500}
          num={5}
          name={"A&D"}
          surname={"Wedding site"}
        />
      </div>
    </section>
  );
}

const Wrapper3 = ({ src, width, height, num, name, surname }) => {
  return (
    <>
      <div className="wrapper3">
        <a href="#" className="item3">
          <figure className="itemimg-3">
            <div className="potrait">
              <Image src={src} width={width} height={height} />
            </div>
          </figure>

          <div className="item-w no3">
            <div className="item-b">
              <div className="titles">
                <h3 className="item-title">{name}</h3>
                <h3 className="item-title sub">{surname}</h3>
              </div>
              <div className="vp">
                <div className="vp-cap">
                  <div className="vp-t">View project</div>
                </div>
              </div>
            </div>

            <div className="item-no">
              <div className="number no2">{num}</div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

const Wrapper4 = ({ src, width, height, num, name, surname }) => {
  return (
    <>
      <div className="wrapper4">
        <a href="#" className="item4">
          <figure className="itemimg-4">
            <div className="potrait">
              <Image src={src} width={width} height={height} />
            </div>
          </figure>

          <div className="item-w no2">
            <div className="item-b">
              <div className="titles">
                <h3 className="item-title">{name}</h3>
                <h3 className="item-title sub">{surname}</h3>
              </div>
              <div className="vp">
                <div className="vp-cap">
                  <div className="vp-t">View project</div>
                </div>
              </div>
            </div>

            <div className="item-no">
              <div className="number no2">{num}</div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

const Wrapper5 = ({ src, width, height, num, name, surname }) => {
  return (
    <>
      <div className="wrapper5">
        <a href="#" className="item5">
          <figure className="itemimg-5">
            <div className="potrait">
              <Image src={src} width={width} height={height} />
            </div>
          </figure>

          <div className="item-w no2">
            <div className="item-b">
              <div className="titles">
                <h3 className="item-title">{name}</h3>
                <h3 className="item-title sub">{surname}</h3>
              </div>
              <div className="vp">
                <div className="vp-cap">
                  <div className="vp-t">View project</div>
                </div>
              </div>
            </div>

            <div className="item-no">
              <div className="number no2">{num}</div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
