import React from "react";
import Image from "next/image";
import { Wrapper4, Wrapper5 } from "./projecthelpers/index";

export default function Projects() {
  return (
    <section className="projects" id="contact">
      <div className="intro h">
        <div className="left">
          <h3>Projects</h3>
        </div>
        <div className="right">
          <p className="introtext">
            Below are some of my projects, where I showcase different
            technologies learnt in the crazy year of 2020 (skip if you just want
            to go the my blog)
          </p>
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
                  <h3 className="item-title">Tweenty</h3>
                  <h3 className="item-title sub">
                    Design and devlopment agency
                  </h3>
                </div>

                <div className="vp">
                  <div className="vp-cap">
                    <div className="vp-t">View projec</div>
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
                  <h3 className="item-title">Plannify</h3>
                  <h3 className="item-title sub">
                    Travelling insurance company
                  </h3>
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
                  <h3 className="item-title">Marie</h3>
                  <h3 className="item-title sub">Timothé</h3>
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
          name={"Niccolo"}
          surname={"Miranda"}
        />

        <Wrapper5
          src={"/08.jpg"}
          width={550}
          height={500}
          num={5}
          name={"Marie"}
          surname={"Timothé"}
        />
      </div>
    </section>
  );
}
