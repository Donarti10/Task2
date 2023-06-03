import React from "react";
import "./Banner-one/banner.scss";
import "./Banner-two/Banner-one.scss";
import "./Banner-three/banner-three.scss";
import "./Banner-four/banner-four.scss";
import "./Banner-five/banner-five.scss"
import "./Banner-six/banner-six.scss"
import "./Banner-seven/banner-seven.scss"
import "./Banner-eight/banner-eight.scss"
import "./DropDown/dropdown.scss"
import "./Dropdown2.js/Faq.scss"
import "./Dropdown2.js/Faq"


import { Data1 } from "./Banner-one/Banner";
import { Data2 } from "./Banner-two/Banner-one";
import { Data3 } from "./Banner-three/Banner-three";
import { Data4 } from "./Banner-four/Banner-four";
import { Data5 } from "./Banner-five/Banner-five";
import { Data6 } from "./Banner-six/Banner-six";
import { Data7 } from "./Banner-seven/Banner-seven";
import { Data8 } from "./Banner-eight/Banner-eight";
import Faq from "./DropDown/Dropdown";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Dropdown from "./Dropdown2.js/Faq";

function Table() {
  return (
    <Tabs>
      <TabList>
        <Tab>Domanins</Tab>
        <Tab>Parfume</Tab>
        <Tab>City</Tab>
        <Tab>Car</Tab>
        <Tab>Balkan-City</Tab>
        <Tab>Drink</Tab>
        <Tab>Famous Person</Tab>
        <Tab>Best Pizza's</Tab>
      </TabList>

      <TabPanel>
        <div className="container">
          <div className="cards">
            {Data1.map((a) => {
              return (
                <div className="card" key={a.id}>
                  <div className="card-style">
                    <p>{a.name}</p>
                  </div>
                  <div className="card-price">
                    <span>{a.price}</span>
                  </div>
                  <div className="card-text">{a.text}</div>
                  <div className="card-button">
                    <button>Buy Now</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Faq />
        <Dropdown />
      </TabPanel>
      <TabPanel>
        <div className="container-banner">
          <div className="card-banner">
            {Data2.map((b) => {
              return (
                <div className="cards-banner" key={b.id}>
                  <div className="parfume">
                    <div
                      className="icon-banner"
                      style={{ content: `url(${b.icon})` }}
                    ></div>
                    <div className="text">
                      <p>{b.text}</p>
                    </div>
                  </div>
                  <div className="paragraf-banner">
                    <p>{b.describe}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="container-three">
          <div className="card-banner-three">
            {Data3.map((c) => {
              return (
                <div className="cards-banner-three" key={c.id}>
                  <div className="image-three">
                    <div
                      className="icon-banner-three"
                      style={{ content: `url(${c.icon})` }}
                    ></div>
                    <div className="text-three">
                      <p>{c.text}</p>
                    </div>
                  </div>
                  <div className="paragraf-banner-three">
                    <p>{c.describe}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="container-four">
          <div className="cards-four">
            {Data4.map((d) => {
              return (
                <div className="card-four" key={d.id}>
                   <div
                      className="icon-banner-four"
                      style={{ content: `url(${d.icon})` }}
                    ></div>
                  <div className="price-four">
                    <span>{d.price}</span>
                  </div>
                  <div className="button-four">
                    <button>Buy Now</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="career-container">
          <h1>Best Cities in Balkan</h1>
          <div className="card-banner-five">
            {Data5.map((f) => {
              return (
                <div className="cards-banner-five" key={f.id}>
                  <div className="image-five">
                    <div
                      className="icon-banner-five"
                      style={{ content: `url(${f.icon})` }}
                    ></div>
                    <div className="text-five">
                      <p>{f.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="container-banner-six">
        <h1>Best Drink</h1>
          <div className="card-banner-six">
            {Data6.map((e) => {
              return (
                <div className="cards-banner-six" key={e.id}>
                  <div className="drink">
                    <div
                      className="icon-banner-six"
                      style={{ content: `url(${e.icon})` }}
                    ></div>
                    <div className="text-six">
                      <p className={e.cls}>{e.text}</p>
                    </div>
                  </div>
                  <div className="paragraf-six">
                    <p className={e.cls}>{e.describe}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="container-banner-seven">
          <div className="card-banner-seven">
            {Data7.map((q) => {
              return (
                <div className="cards-banner-seven" key={q.id}>
                  <div className="persons">
                    <div
                      className="icon-banner-seven"
                      style={{ content: `url(${q.icon})` }}
                    ></div>
                    <div className="text-seven">
                      <p>{q.text}</p>
                    </div>
                  </div>
                  <div className="paragraf-seven">
                    <p>{q.describe}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="career-container-eight">
        <h1>Best Pizza's</h1>
          <div className="card-banner-eight">
            {Data8.map((t) => {
              return (
                <div className="cards-banner-eight" key={t.id}>
                  <div className="image-eight">
                    <div
                      className="icon-banner-eight"
                      style={{ content: `url(${t.icon})` }}
                    ></div>
                    <div className="text-eight">
                      <p>{t.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
}

export default Table;
