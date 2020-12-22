import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container container--pall">
        <div className="hero_box">
          <div className="center">
            <span>studio</span>
            <h1>12, rue, du Virgo Driant</h1>
            <h1>15000, Saint De Entie, France</h1>
            <h2>studio@virgofolio.fr</h2>
            <h3>@ Kim Julien Hobbs</h3>
          </div>
        </div>

        <div className="bottomleft">
          <p id="paragraph">
            We are at the forefront of elite model managment, in a place where
            we help you visualise your drema through the use of our in-built
            house connections and talent managment.
          </p>
        </div>

        <aside className="policy">
          <div className="item">
            <h3>ⓒ2020</h3>
          </div>

          <div className="item">
            <div className="row">
              <div className="rowText">
                Suite 10, 126–130 Champagne Street , Saint entiness, France FR
              </div>
              <div className="rowText">
                <div className="rtItem">Privacy Policy </div>
                <div className="circle"></div>
                <div className="rtItem">Terms of use</div>
                <div className="circle"></div>
                <div className="rtItem">Cookie Policy</div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div
        className="imgContainer"
        id="container"
        data-scroll
        data-scroll-speed="2"
      >
        <div className="block" data-scroll data-scroll-speed="-2">
          <Image src="/1.jpg" width={1280} height={853} />
        </div>
      </div>
    </section>
  );
}
