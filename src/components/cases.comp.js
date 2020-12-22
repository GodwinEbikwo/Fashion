import React from "react";
import Image from "next/image";

export default function Cases() {
  return (
    <section className="cases" id="contact">
      <div className="intro h">
        <div className="left">
          <h3>
            At Virgofolio, we exist to ideate, create, and visualise a new era
            of realities.
          </h3>
        </div>
        <div className="right">
          <div className="rightText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            error laborum, earum accusantium voluptate ipsam nulla illum
            architecto neque nobis et rerum ducimus, maxime magnam! Consectetur
            eum, totam aperiam cum dolorem ex ipsum molestiae repellendus est
            quas sapiente ea sequi!
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
                  <h3 className="item-title">Annabel</h3>
                  <h3 className="item-title sub">Coute</h3>
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
                  <h3 className="item-title">ANNA</h3>
                  <h3 className="item-title sub">PAUL</h3>
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
          name={"Marie"}
          surname={"Timothé"}
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
