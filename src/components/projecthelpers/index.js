import Image from "next/image";

export const Wrapper4 = ({ src, width, height, num, name, surname }) => {
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

export const Wrapper5 = ({ src, width, height, num, name, surname }) => {
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
